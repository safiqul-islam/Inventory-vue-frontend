<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../../stores/auth';


const usestore = useAuthStore();
const {login} = usestore;
const {email, password} = storeToRefs(usestore);

const formemail = ref(email);
const formpassword = ref(password);


</script>

<template>
    <div class="page-wrapper">
        <div class="authentication-box">
            <div class="container-fluid">
                <div class="row log-in">
                    <div class=" col-md-6 col-sm-8 form-login">
                        <div class="card">
                            <div class="card-body">
                                <div class="title-3 text-start">
                                    <h2>Log in</h2>
                                </div>
                                <form @submit.prevent="login" autocomplete="off">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i data-feather="user"></i>
                                                </div>
                                            </div>
                                            <input type="email" v-model="formemail" class="form-control" placeholder="Enter Email" autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <i data-feather="mail"></i>
                                                </div>
                                            </div>
                                            <input type="password" v-model="formpassword" id="pwd-input" class="form-control" placeholder="Password" autocomplete="off" >
                                            <div class="input-group-apend">
                                                <div class="input-group-text">
                                                    <i id="pwd-icon" class="far fa-eye-slash"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="important-note">
                                            password should be a minimum of 8 characters and should contains letters and numbers
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <label class="d-block mb-0" for="chk-ani">
                                            <input class="checkbox_animated color-2" id="chk-ani" type="checkbox"> Remember me
                                        </label>
                                        <RouterLink :to="{name:'forgetpass'}" class="font-rubik text-color-2">Forgot password ?</RouterLink>
                                    </div>
                                    <div>
                                        <button type="submit" class="btn btn-gradient btn-pill color-2 me-sm-3 me-2">Log in</button>
                                        <RouterLink :to="{name:'signup'}" class="btn btn-dashed btn-pill color-2">Create Account</RouterLink>
                                    </div>
                                    <div class="divider">
                                        <h6>or</h6>
                                    </div>
                                    <div>
                                        <h6>Log in with</h6>
                                        <div class="row social-connect">
                                            <div class="col-6">
                                                <a href="https://www.facebook.com/" class="btn btn-social btn-flat facebook p-0">
                                                    <i class="fab fa-facebook-f"></i>
                                                    <span>Facebook</span>
                                                </a>
                                            </div>
                                            <div class="col-6">
                                                <a href="https://twitter.com/" class="btn btn-social btn-flat twitter p-0">
                                                    <i class="fab fa-twitter"></i>
                                                    <span>Twitter</span>
                                                </a>
                                            </div>
                                            <div class="col-6">
                                                <a href="https://accounts.google.com/" class="btn btn-social btn-flat google p-0">
                                                    <i class="fab fa-google"></i>
                                                    <span>Google</span>
                                                </a>
                                            </div>
                                            <div class="col-6">
                                                <a href="https://www.linkedin.com/" class="btn btn-social btn-flat linkedin p-0">
                                                    <i class="fab fa-linkedin-in"></i>
                                                    <span>Linkedin</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>