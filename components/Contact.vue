<template>
    <section class="sc-contact" data-color="#000">
        <div class="contact-container">
            <div class="msg-area">
                <h2 class="contact-msg">CONTACT ME</h2>
            </div>
            <div class="contact-area">
                <div class="contact-content">
                    <h3 class="contact-title">
                        <span class="title-text">메시지를 보내주세요</span>
                    </h3>
                    <form class="contact-form" @submit.prevent="handleSubmit" aria-labelledby="contact-heading" novalidate>
                        <div class="form-group">
                            <label for="name">이름</label>
                            <input 
                                ref="nameRef"
                                type="text" 
                                id="name" 
                                v-model="formData.name" 
                                placeholder="이름을 입력해주세요"
                                required
                                autocomplete="name"
                                aria-required="true"
                            >
                        </div>
                        <div class="form-group">
                            <label for="email">이메일</label>
                            <input 
                                ref="emailRef"
                                type="email" 
                                id="email" 
                                v-model="formData.email" 
                                placeholder="이메일을 입력해주세요"
                                required
                                autocomplete="email"
                                aria-required="true"
                            >
                        </div>
                        <div class="form-group">
                            <label for="subject">제목</label>
                            <input 
                                ref="subjectRef"
                                type="text" 
                                id="subject" 
                                v-model="formData.subject" 
                                placeholder="제목을 입력해주세요"
                                required
                                aria-required="true"
                            >
                        </div>
                        <div class="form-group">
                            <label for="message">메시지</label>
                            <textarea 
                                ref="messageRef"
                                id="message" 
                                v-model="formData.message" 
                                placeholder="메시지를 입력해주세요"
                                required
                                aria-required="true"
                                rows="5"
                            ></textarea>
                        </div>
                        <div aria-live="polite" class="sr-only" v-if="statusMsg">
                            {{ statusMsg }}
                        </div>
                        <button type="submit" class="submit-btn" :aria-busy="statusType === 'success' ? 'false' : statusType === 'error' ? 'false' : 'true'">
                            <span class="btn-text">보내기</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div v-if="popup.visible" class="popup-layer" @click.self="closePopup">
            <div class="popup-content">
                <span class="popup-message">{{ popup.message }}</span>
                <button class="popup-close" @click="closePopup" aria-label="닫기">확인</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import emailjs from '@emailjs/browser'

const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const statusMsg = ref('')
const statusType = ref<'success'|'error'|''>('')

const nameRef = ref<HTMLInputElement | null>(null)
const emailRef = ref<HTMLInputElement | null>(null)
const subjectRef = ref<HTMLInputElement | null>(null)
const messageRef = ref<HTMLTextAreaElement | null>(null)

const popup = ref<{ visible: boolean, message: string, refToFocus?: any }>({ visible: false, message: '' })

function focusAfterPopup(el: any) {
    if (!el) return;
    requestAnimationFrame(() => {
        if (typeof el.focus === 'function') {
            el.focus();
            console.log('focus on dom', el);
        } else if (el.$el && typeof el.$el.focus === 'function') {
            el.$el.focus();
            console.log('focus on $el', el.$el);
        } else {
            console.log('no focusable element', el);
        }
    });
}

function showPopup(msg: string, refToFocus?: any) {
    popup.value.message = msg
    popup.value.visible = true
    popup.value.refToFocus = refToFocus
    const focusRef = refToFocus;
    setTimeout(() => {
        popup.value.visible = false
        nextTick(() => {
            focusAfterPopup(focusRef?.value);
        });
    }, 1500)
}

function closePopup() {
    popup.value.visible = false
    const focusRef = popup.value.refToFocus;
    nextTick(() => {
        focusAfterPopup(focusRef?.value);
    });
}

const validateForm = () => {
    if (!formData.value.name.trim()) {
        statusMsg.value = '이름을 입력해주세요.';
        showPopup('이름을 입력해주세요.', nameRef);
        return false;
    }
    if (!formData.value.email.trim()) {
        statusMsg.value = '이메일을 입력해주세요.';
        showPopup('이메일을 입력해주세요.', emailRef);
        return false;
    }
    // 간단한 이메일 형식 체크
    const emailPattern = /^[^\s@]+@[^-\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.value.email)) {
        statusMsg.value = '올바른 이메일 형식을 입력해주세요.';
        showPopup('올바른 이메일 형식을 입력해주세요.', emailRef);
        return false;
    }
    if (!formData.value.subject.trim()) {
        statusMsg.value = '제목을 입력해주세요.';
        showPopup('제목을 입력해주세요.', subjectRef);
        return false;
    }
    if (!formData.value.message.trim()) {
        statusMsg.value = '메시지를 입력해주세요.';
        showPopup('메시지를 입력해주세요.', messageRef);
        return false;
    }
    return true;
}

const handleSubmit = async () => {
    statusMsg.value = ''
    statusType.value = ''
    if (!validateForm()) return;
    try {
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, // EmailJS Service ID
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // EmailJS Template ID
            {
                name: formData.value.name,
                email: formData.value.email,
                subject: formData.value.subject,
                message: formData.value.message,
                to_email: 'ixkfo86@gmail.com',
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY // EmailJS Public Key
        )
        statusMsg.value = '메시지가 성공적으로 전송되었습니다!'
        statusType.value = 'success'
        formData.value = { name: '', email: '', subject: '', message: '' }
        alert('메시지가 성공적으로 전송되었습니다!')
    } catch (e) {
        statusMsg.value = '메시지 전송에 실패했습니다. 다시 시도해주세요.'
        statusType.value = 'error'
        alert('메시지 전송에 실패했습니다. 다시 시도해주세요.')
    }
}

onMounted(() => {
    const contactAnimation = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.sc-contact',
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }
        })

        tl.from('.contact-msg', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.contact-title', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.form-group', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.submit-btn', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            onComplete: () => {
                gsap.to('.submit-btn', {
                    scale: 1,
                    duration: 0.5,
                    ease: 'power1.inOut'
                })
            }
        }, '-=0.4')
    }

    contactAnimation()
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;

.sc-contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8em 0;
    background-color: #1d2024;
    color: #fff;
    position: relative;
    overflow: hidden;

    @include mobile {
        padding: 6em 0;
    }

    .contact-container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 0 2em;
    }

    .msg-area {
        text-align: left;
        margin-bottom: 4em;

        .contact-msg {
            font-size: 3.5em;
            font-weight: 500;
            line-height: 1.2;
            letter-spacing: -0.02em;
            font-family: v.$font-en5;

            @include mobile {
                font-size: 2.5em;
            }
        }
    }

    .contact-area {
        .contact-content {
            width: 100%;
        }

        .contact-title {
            margin-bottom: 2em;
            text-align: left;

            .title-text {
                font-size: 2em;
                font-weight: 400;
                letter-spacing: -0.02em;
                font-family: v.$font-en5;

                @include mobile {
                    font-size: 1.8em;
                }
            }
        }

        .contact-form {
            .form-group {
                margin-bottom: 2em;

                label {
                    display: block;
                    margin-bottom: 0.5em;
                    font-size: 1.1em;
                    color: rgba(255, 255, 255, 0.8);
                }

                input, textarea {
                    width: 100%;
                    padding: 1em;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                    color: #fff;
                    font-size: 1em;
                    transition: all 0.3s ease;

                    &:focus {
                        outline: none;
                        border-color: v.$main-color;
                        background: rgba(255, 255, 255, 0.1);
                    }

                    &::placeholder {
                        color: rgba(255, 255, 255, 0.4);
                    }
                }

                textarea {
                    min-height: 150px;
                    resize: vertical;
                }
            }

            .submit-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 1em;
                width: 100%;
                padding: 1em 2.2em;
                background: rgba(255, 255, 255, 0.15);
                color: #fff;
                font-size: 1.1em;
                font-weight: 700;
                border: none;
                border-radius: .5em;
                box-shadow: 0 4px 24px 0 rgba(0,0,0,0.18);
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                cursor: pointer;
                position: relative;
                overflow: hidden;
                margin-top: 1em;

                &:hover {
                    background:v.$main-color;
                    color: #fff;
                    box-shadow: 0 6px 32px 0 rgba(0,0,0,0.22);
                }

                .btn-text {
                    position: relative;
                    z-index: 1;
                }
            }
        }
    }
}

.popup-layer {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.35);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}
.popup-content {
    background: #fff;
    color: #222;
    border-radius: 1em;
    padding: 2em 2.5em;
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 220px;
}
.popup-message {
    font-size: 1.15em;
    margin-bottom: 1.2em;
    text-align: center;
}
.popup-close {
    background: #222;
    color: #fff;
    border: none;
    border-radius: 0.5em;
    padding: 0.5em 1.5em;
    font-size: 1em;
    cursor: pointer;
    transition: background 0.2s;
}
.popup-close:hover {
    background: #444;
}
</style>
