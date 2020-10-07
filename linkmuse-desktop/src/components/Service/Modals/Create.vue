<template>
    <modal class="modal-create-project" v-model="modal.show" @hide="closeModal()" :header="true" :title="$t('profile_customer.profile_customer_service_one.create_service_header')" :footer="false">
        <div class="modal-create-project--title">{{ $t('profile_customer.profile_customer_service_one.create_service_title') }}</div>
        <label for="modal-background-service" :class="{ 'modal-create-project-background': true, 'error': errors['background'] }" v-if="!background.src && !background.uploading">
            <i class="photo"></i>
            <span class="modal-create-project-background-span">{{ $t('profile_customer.profile_customer_service_one.upload_cover') }}</span>
        </label>
        <input accept="image/*" style="display: none;" type="file" id="modal-background-service" @change="onBackgroundChange">
        <div class="cropp-wrapper-service" v-if="background.src && background.uploading">
            <a href="javascript:void(0)" class="remove-background-btn" @click="removeBackground()">Удалить</a>
            <vue-cropper 
                :class="{ 'vue-cropper': true, 'croppa-service': true }"
                id="cropper_photo_service"
                ref='cropper_photo_service'
                :responsive="false"
                :restore="false"
                :checkCrossOrigin="true"
                :checkOrientation="false"
                :cropBoxMovable="false"
                :cropBoxResizable="false"
                :toggleDragModeOnDblclick="false"
                :modal="false"
                
                :highlight="false"
                :zoomOnTouch="false"
                :scalable="false"
                :rotatable="false"

                :guides="true"

                :viewMode="3"
                dragMode="move"
                :aspectRatio="(600/164)"
                :autoCropArea="1"
                
                :minCanvasHeight="164"
                :minContainerWidth="600"
                :minContainerHeight="164"
                
                :ready="_handleCropReady"
                :src="background.src">
            </vue-cropper>
        </div>
        
        <div class="modal-create-project-content row">
            <div :class="{ 'form-group': true, 'col-xs-12': true, error: errors['name'] }">
                <label for="name" class="required">{{ $t('profile_customer.profile_customer_service_one.name') }} <span>*</span></label>
                <span class="has-error" v-if="errors['name'] && !VeeErrors.has('name_serivce')">{{ errors['name'][0] }}</span>
                <span class="has-error" v-else-if="VeeErrors.has('name_serivce')">{{ VeeErrors.first('name_serivce') }}</span>
                <input type="text"
                    id="name"
                    data-vv-name="name_serivce"
                    :placeholder="$t('profile_customer.profile_customer_service_one.name_placeholder')"
                    v-validate="'required'" 
                    v-model="fields.name">
            </div>
            <div class="form-group col-xs-12">
                <label for="description" class="required">{{ $t('profile_customer.profile_customer_service_one.description') }} <span>*</span></label>
                <span class="has-error" v-if="errors['description'] && !VeeErrors.has('description')">{{ errors['description'][0] }}</span>
                <span class="has-error" v-else-if="VeeErrors.has('description_serivce')">{{ VeeErrors.first('description_serivce') }}</span>
                <transition name="show-editor">
                    <wysiwyg-markdown name="description_serivce"
                                    id="description_serivce"
                                    data-vv-name="description_serivce"
                                    v-validate="'required'"
                                    v-if="isEditor"
                                    ref="MDEditor"
                                    v-model="fields['description']">
                    </wysiwyg-markdown>
                </transition>
                <textarea v-if="!isEditor"
                            name="description"
                            id="description"
                            data-vv-name="description_serivce"
                            v-validate="'required'" 
                            :placeholder="$t('profile_customer.profile_customer_service_one.description_placeholder')"
                            v-model="fields.description"
                            @focus="showEditor">
                </textarea>
            </div>
            <div class="uploading-wrap">
                <div class="files-modal" v-if="files.data.length !== 0">
                    <div style="width: 126px;margin-bottom: 10px;" v-for="(item, index) in files.data">
                        <a target="_blank" :href="item.path" class="file types" v-if="!checkMimeType(item.mime_type)">
                            <i @click.stop.prevent="removeAttachedFile(index)" class="remove"></i>
                            <div class="file-wrap">
                                <filetype :label_text='item.extension'></filetype>
                            </div>
                            <div href="javascript:void(0)" class="file-type-text">{{ item.name }}</div>
                            <div class="files--size">{{ formatSize(item.size) }}</div>
                        </a>
                        <a target="_blank" :href="item.path" v-if="checkMimeType(item.mime_type)" class="file">
                            <i @click.stop.prevent="removeAttachedFile(index)" class="remove"></i>
                            <div class="file-wrap">
                                <img :src="item.path" alt="">
                            </div>
                            <div href="javascript:void(0)" class="file-type-text">{{ item.name }}</div>
                            <div class="files--size">{{ formatSize(item.size) }}</div>
                        </a>
                    </div>
                    <div class="fix"></div>
                </div>
                <loader style="margin-bottom: 26px;" v-if="files.loading"></loader>
                <label for="attachment_serivce" v-if="files.data.length == 0" href="javascript:void(0)" class="uploading">{{ $t('profile_customer.profile_customer_service_one.upload_file') }}</label>
                <label for="attachment_serivce" v-if="files.data.length !== 0" href="javascript:void(0)" class="uploading more">Загрузить еще</label>
                <input style="display: none;" id="attachment_serivce" ref="attachment_serivce" type="file" data-vv-name="attachment_serivce" v-validate="'mimes:image/*'" multiple @change="onFileChange">
                <span class="uploading-text">{{ $t('profile_customer.profile_customer_service_one.upload_file_description') }}</span>
            </div>
            <div :class="{ 'form-group': true, 'col-xs-6': true, error: (errors['price_serivce'] || VeeErrors.has('price_serivce')) }">
                <label for="price" class="required">{{ $t('profile_customer.profile_customer_service_one.price') }} <span>*</span></label>
                <span class="has-error" v-if="errors['price'] && !VeeErrors.has('price_serivce')" style="display: none;">{{ errors['price'][0] }}</span>
                <span class="has-error" v-else-if="VeeErrors.has('price_serivce')" style="display: none;">{{ VeeErrors.first('price_serivce') }}</span>
                <input type="text" name="price" 
                    id="price"
                    data-vv-name="price_serivce"
                    v-validate="'required|numeric'"
                    :placeholder="$t('profile_customer.profile_customer_service_one.price_placeholder')"
                    v-model="fields.price">
            </div>
            <div :class="{ 'form-group': true, 'col-xs-6': true, error: (errors['discount'] || VeeErrors.has('discount_serivce')) }">
                <label for="discount" class="required">{{ $t('profile_customer.profile_customer_service_one.discount') }} <span>*</span></label>
                <span class="has-error" v-if="errors['discount'] && !VeeErrors.has('discount_serivce')" style="display: none;">{{ errors['discount'][0] }}</span>
                <span class="has-error" v-else-if="VeeErrors.has('discount_serivce')" style="display: none;">{{ VeeErrors.first('discount_serivce') }}</span>
                <input type="text" 
                    name="discount" 
                    id="discount" 
                    data-vv-name="discount_serivce"
                    v-validate="'required|numeric|min_value:0|max_value:100'"
                    :placeholder="$t('profile_customer.profile_customer_service_one.discount_placeholder')"
                    v-model="fields.discount">
            </div>
        </div>
        <a href="javascript:void(0)" class="button save" @click="createService()" v-if="!modal.loading">{{ $t('profile_customer.profile_customer_service_one.create_button') }}</a>
        <loader v-if="modal.loading"></loader>
    </modal>
</template>


<script>
    
    export default {
        data() {
            return {
                modal: {
                    show: false,
                    loading: false,
                    errors: [],
                    fields: {
                        name: null,
                        description: null,
                        price: null,
                        discount: null,
                        files: [],
                        background: null
                    }
                },
                background: {
                    src: null,
                    uploading: false
                },
                files: {
                    data: [],
                    loading: false
                },
                isEditor: false
            }
        },
        computed: {
            fields() {
                return this.modal.fields;
            },
            errors: {
                get() {
                    return this.modal.errors;
                },
                set(val) {
                    this.modal.errors = val;
                }
                
            }
        },
        beforeDestroy() {
            this.$root.$off('open-modal-create-service');
        },
        created() {
            this.$root.$on('open-modal-create-service', () => {
                this.modal.show = true;
            });
        },
        methods: {
            showEditor() {
                this.isEditor = true;
                this.$nextTick(() => {
                    this.$refs.MDEditor.simplemde.codemirror.focus();
                });
            },
            closeModal() {
                this.modal.show = false;
                this.isEditor = false;
                this.clearFileds();
            },
            onBackgroundChange(el) {
                let files = el.target.files || el.dataTransfer.files;
                if (!files.length)
                    return;

                let image = new Image();
                let reader = new FileReader();

                reader.onload = (el) => {
                    this.background = {
                        src: el.target.result,
                        uploading: true
                    }
                };

                reader.readAsDataURL(files[0]);
            },
            onFileChange(el) {
                let files = el.target.files;

                if (!files.length)
                    return;

                if (this.VeeErrors.has('attachment_serivce')) return false;

                this.uploadAttach(files);
            },
            uploadAttach(files) {
                this.files.loading = true;
                let data = new FormData();
                for (let i = 0; i < files.length; i++) {
                    let file = files[i];
                    data.append('files[]', file);
                }

                Vue.http.post('/api/v1/services/files', data).then(response => {
                    response.data.data.forEach(item => {
                        this.files.data.push(item);
                        this.fields.files.push(item.id);
                    });

                    this.files.loading = false;
                    this.$refs.attachment_serivce.value = '';
                }, response => {
                    let message = response.data.errors['files.0'][0];
                    this.$root.showErrorToast(message, 'Произошла ошибка загрузки');

                    this.files.loading = false;
                    throw new Error(message);
                });
            },
            removeAttachedFile(index) {
                this.files.data.splice(index, 1);
                this.fields.files.splice(index, 1);
            },
            formatSize(bytes) {
                return this.$root.formatBytes(bytes);
            },
            checkMimeType(mime_type) {
                return mime_type.indexOf("image") !== -1;
            },
            createService() {
                this.$validator.validateAll().then(result => {
                    if (result) {

                        if (!this.modal.fields.background) {
                            this.errors = {
                                background: 'Ошибочка'
                            };
                            
                            return false;
                        }

                        this.modal.loading = true;

                        let context = this.$refs.cropper_photo_service,
                            size = {width: 600, height: 144};

                        context.getCroppedCanvas(size).toBlob((blob) => {
                            let reader = new FileReader();
                            this.modal.fields.background = blob;

                            let data = new FormData();
                            Object.keys(this.modal.fields).forEach((key) => {
                                const value = this.modal.fields[key];

                                if (Array.isArray(value)) {
                                    value.forEach(val => {
                                        data.append(`${key}[]`, val);
                                    });
                                } else data.append(key, value);
                            });

                            Vue.http.post('/api/v1/services', data).then( response => {
                                this.modal.loading = false;

                                this.clearFileds();
                                
                                let item = response.data.data;
                                this.$root.$emit('created-service-item', item);

                                this.closeModal();
                            }, response => {
                                if (response.data.hasOwnProperty('errors')) this.errors = response.data.errors;

                            this.modal.loading = false;
                            });
                        });
                    } else {
                        this.$nextTick(() => {
                            let el = this.$el.querySelector('.has-error');
                            this.$scrollTo(el);
                        });
                    }
                });
            },
            _handleCropReady() {
                this.$nextTick(() => {
                    this._handleGetCroppedCanvas();
                });
            },
            _handleGetCroppedCanvas() {
                let context = this.$refs.cropper_photo_service,
                    size = {width: 600, height: 144}

                context.getCroppedCanvas(size).toBlob((blob) => {
                    let reader = new FileReader();
                    this.modal.fields.background = blob;
                });
            },
            removeBackground() {
                this.background = {
                    src: null,
                    uploading: false
                };
                this.fields.background = null;
            },
            clearFileds() {
                this.modal.fields = {
                    name: null,
                    description: null,
                    price: null,
                    discount: null,
                    files: [],
                    background: null
                };
                this.modal.errors = [];

                this.background = {
                    src: null,
                    uploading: false
                };
                this.files = {
                    data: [],
                    loading: false
                };
            }
        }
    }
</script>
<style lang="sass">
    .croppa-service
        height: 164px
        margin-bottom: 39px
    .cropp-wrapper-service
        position: relative
        .remove-background-btn
            position: absolute
            top: -26px
            right: 10px
            font-size: 15px
    .modal-create-project
        .markdown-editor
            -webkit-transition: all .3s linear
            transition: all .3s linear
            margin-bottom: 30px
            width: 500px !important
            margin-left: -50px !important
</style>