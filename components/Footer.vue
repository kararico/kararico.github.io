<template>
    <footer class="footer">
        <h2>Heo Jung won</h2>
        <div class="group-bottom">
            <div class="col-left">
                <div class="info-box">
                    <a href="mailto:ixkfo86@gmail.com">E-mail: ixkfo86@gmail.com</a>
                    <!-- <a href="tel:"></a> -->
                    <div class="sns-list">
                        <a
                            href="https://velog.io/@hh5039?tag=%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4"
                            target="_blank">
                            <img src="@/assets/images/layout/footer/velog-icon.png" alt="velog">
                        </a>
                        <a href="https://github.com/leehh0203?tab=repositories" target="_blank">
                            <img src="@/assets/images/layout/footer/free-icon-github-logo-25231.png" alt="github">
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-right">
                <div class="producer">
                    <div class="group-producer">
                        <span>© 2025</span>
                    </div>
                    <a href="">Heo-jungwon All Rights Reserved</a>
                </div>
            </div>
        </div>
        <div class="bg">
            <div class="video-wrap">
            <video
                loop
                autoplay
                muted
                playsinline
                data-wf-ignore="true"
                data-object-fit="cover">
                <source
                    src="https://assets.website-files.com/63f5d378a903c2a12583ce2f/64132dde932dbe26445541a5_BG-transcode.mp4"
                    data-wf-ignore="true">
                <source
                    src="https://assets.website-files.com/63f5d378a903c2a12583ce2f/64132dde932dbe26445541a5_BG-transcode.webm"
                    data-wf-ignore="true"></video>
            </div>
            <div class="video-overlay"></div>
        </div>
    </footer>
</template>

<script setup="setup" lang="ts">
    import {onMounted} from 'vue'
    import gsap from 'gsap'
    import {ScrollTrigger} from 'gsap/ScrollTrigger'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/common/_var' as v;
@use '@/assets/scss/common/_mixins' as *;
.footer{
    display: flex;
    gap: 6em;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 15em 12em 15em 12em;
    position: relative;
    overflow: hidden;

    @include tablet{ padding: 10em 5em 15em; }
    @include mobile{
        gap: 2em;
        padding: 0em 2em 3em;
    }

    h2{
        z-index: 2;
        position: relative;
        letter-spacing: -.025em;
        font-size: 4em;
        font-weight: 400;
        line-height: 1;
        font-family: v.$font-en5;

        @include mobile{ font-size: 2em; }
    }
    .group-bottom{
        z-index: 2;
        display: flex;
        justify-content: space-between;

        @include mobile{
            gap: 2em;
            flex-direction: column;
        }

        .col-left{
            flex-direction: column;
            flex: 1;
            display: flex;
            gap: 3em;
            justify-content: space-between;
            width: 25em;
            letter-spacing: .03em;
            font-size: 1.2em;
            font-weight: 400;
            line-height: 1.7;

            @include mobile{
                width: 100%;
                gap: 6em;
            }
            .info-box{
                display: flex;
                flex-direction: column;
                gap: 0.5em;
                a{
                    @include laptop{ font-size: 1em; }
                    @include tablet{ font-size: 1.2em; }
                    @include mobile{
                        font-size: 1.2em;
                        line-height: 1.5;
                    }
                }
                .sns-list{
                    display: flex;
                    margin-top: 1em;
                    gap: 1em;

                    @include mobile{ margin-top: 1em; }
                    a{
                        border-radius: 100em;
                        img{
                            width: 2em;
                            filter: invert(100%);

                            @include mobile{ width: 1.6em; }
                        }
                    }
                }

            }
        }
        .col-right{
            display: flex;
            position: relative;

            @include mobile{ width: 100%; }

            .our-story{
                width: 8em;
                height: 8em;
                margin-bottom: -2em;
                margin-left: -2em;
                position: absolute;
                top: -4.5em;
                right: 0;

                @include laptop{
                    width: 9em;
                    height: 9em;
                }

                @include mobile{
                    width: 25em;
                    height: 25em;
                    top: 10em;
                    right: 0;
                    margin-bottom: 0;
                    margin-left: 0;
                }

                a{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    backdrop-filter: blur(6px);
                    background-color: rgba(255,255,255,.1);
                    border-radius: 100%;
                    letter-spacing: .02em;
                    font-size: .75em;
                    font-weight: 400;
                    line-height: 1.5em;

                    @include laptop{ font-size: 1em; }

                    @include mobile{ font-size: 3.6em; }


                }
            }
            .producer{
                display: flex;
                gap: 1em;
                opacity: .3;
                letter-spacing: .02em;
                font-size: 1em;
                font-weight: 300;
                line-height: 1.75;
                align-items: flex-end;

                @include mobile{
                    font-size: 1.2em;
                }

                .group-producer{
                    display: flex;
                    gap: 1em;

                    @include mobile{
                        flex-wrap: wrap;
                        gap: 2em; 
                    }
                }
            }
        }
    }
    .bg{
        position: relative;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        .video-wrap{
            width: 100%;
            height: 100%;
            opacity: .3;
            transform-style: preserve-3d;
            transform: scale(1.5)rotateX(0)rotateY(180deg)rotate(0);
            video{
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: -100;
                background-position: 50%;
                background-size: cover;
                margin: auto;
                position: absolute;
                top: -100%;
                bottom: -100%;
                left: -100%;
                right: -100%;
            }
        }
        .video-overlay{
            width: 100%;
            height: 50%;
            background-image: linear-gradient(#1d2024,rgba(29,32,36,0));
            position: absolute;
            top: 0;
            left: 0;

            @include mobile{
                height: 35%;
            }
        }
    }
}
</style>