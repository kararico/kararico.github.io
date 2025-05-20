<template>
    <div class="contact">
        <div class="contact__container">
            <div class="contact__msg-area">
                <h2 class="contact__msg">CONTACT ME</h2>
            </div>
            <div class="contact__area">
                <div class="contact__content">
                    <h3 class="contact__title">
                        <span class="contact__title-text">메시지를 보내주세요</span>
                    </h3>
                    <form class="contact__form" @submit.prevent="handleSubmit" aria-labelledby="contact-heading" novalidate>
                        <div class="contact__form-group">
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
                        <div class="contact__form-group">
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
                        <div class="contact__form-group">
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
                        <div class="contact__form-group">
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
                        <button type="submit" class="contact__submit-btn" :aria-busy="statusType === 'success' ? 'false' : statusType === 'error' ? 'false' : 'true'">
                            <span class="btn-text">보내기</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div v-if="popup.visible" class="contact__toast-message">
            <span class="contact__toast-text">{{ popup.message }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()
const emailjs = ref<any>(null)

// 폼 데이터 상태 관리
const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

// 폼 상태 메시지 관리
const statusMsg = ref('')
const statusType = ref<'success'|'error'|''>('')

// 폼 요소 참조
const nameRef = ref<HTMLInputElement | null>(null)
const emailRef = ref<HTMLInputElement | null>(null)
const subjectRef = ref<HTMLInputElement | null>(null)
const messageRef = ref<HTMLTextAreaElement | null>(null)

// 팝업 상태 관리
const popup = ref<{ visible: boolean, message: string, refToFocus?: any }>({ visible: false, message: '' })

// 팝업 후 포커스 처리 함수
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

// 팝업 표시 함수
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

// 팝업 닫기 함수
function closePopup() {
    popup.value.visible = false
    const focusRef = popup.value.refToFocus;
    nextTick(() => {
        focusAfterPopup(focusRef?.value);
    });
}

// 폼 유효성 검사 함수
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
    // 이메일 형식 검사
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

// 폼 제출 처리 함수
const handleSubmit = async () => {
    statusMsg.value = ''
    statusType.value = ''
    if (!validateForm()) return;
    try {
        await emailjs.value.send(
            config.public.emailjsServiceId,
            config.public.emailjsTemplateId,
            {
                user_id: config.public.emailjsPublicKey,
                name: formData.value.name,
                email: formData.value.email,
                to_name: '정원',
                to_email: 'ixkfo86@gmail.com',
                reply_to: formData.value.email,
                subject: formData.value.subject,
                message: formData.value.message
            }
        )
        statusMsg.value = '메시지가 성공적으로 전송되었습니다!'
        statusType.value = 'success'
        formData.value = { name: '', email: '', subject: '', message: '' }
        showPopup('메시지가 성공적으로 전송되었습니다!')
    } catch (e) {
        statusMsg.value = '메시지 전송에 실패했습니다. 다시 시도해주세요.'
        statusType.value = 'error'
        showPopup('메시지 전송에 실패했습니다. 다시 시도해주세요.')
        console.error('EmailJS error:', e)
    }
}

// 컴포넌트 마운트 시 실행
onMounted(async () => {
    // EmailJS 초기화
    emailjs.value = (await import('@emailjs/browser')).default
    emailjs.value.init(config.public.emailjsPublicKey)

    // 컨택트 섹션 애니메이션 설정
    const contactAnimation = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.contact',
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }
        })

        tl.from('.contact__msg', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.contact__title', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.contact__form-group', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.contact__submit-btn', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            onComplete: () => {
                gsap.to('.contact__submit-btn', {
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

// 컨택트 섹션 기본 스타일
.contact {
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

    // 컨택트 컨테이너 스타일
    .contact__container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 0 2em;
    }

    // 메시지 영역 스타일
    .contact__msg-area {
        text-align: left;
        margin-bottom: 4em;

        .contact__msg {
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

    // 컨택트 영역 스타일
    .contact__area {
        .contact__content {
            width: 100%;
        }

        // 제목 스타일
        .contact__title {
            margin-bottom: 2em;
            text-align: left;

            .contact__title-text {
                font-size: 2em;
                font-weight: 400;
                letter-spacing: -0.02em;
                font-family: v.$font-en5;

                @include mobile {
                    font-size: 1.8em;
                }
            }
        }

        // 폼 스타일
        .contact__form {
            .contact__form-group {
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

            // 제출 버튼 스타일
            .contact__submit-btn {
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

// 토스트 메시지 스타일
.contact__toast-message {
    position: fixed;
    left: 50%;
    bottom: 3em;
    transform: translateX(-50%);
    background: v.$main-color;
    color: #fff;
    padding: 1em 2em;
    border-radius: 2em;
    font-size: 1.1em;
    box-shadow: 0 4px 24px 0 rgba(0,0,0,0.18);
    z-index: 9999;
    animation: toast-fadein 0.3s, toast-fadeout 0.3s 1.2s;
    pointer-events: none;
}

// 토스트 메시지 페이드인 애니메이션
@keyframes toast-fadein {
    from { opacity: 0; transform: translateX(-50%) translateY(30px);}
    to   { opacity: 1; transform: translateX(-50%) translateY(0);}
}

// 토스트 메시지 페이드아웃 애니메이션
@keyframes toast-fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
}
</style>
