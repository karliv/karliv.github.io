<template>
    <div>
        <div class="ss-dispute-warning-head">
            <div class="left">Верификация</div>
            <i class="icon-more">
                <div class="actions-item">
                    <ul>
                        <li>
                            <a href="javascript:void(0)">Удалить</a>
                        </li>
                    </ul>
                </div>
            </i>
        </div>
        <tabs :value="1">
            <tab title="Параметры" style="padding: 0" v-if="work_has_measurement">
                <div class="ss-dispute-warning-content">
                    <div class="ss-dispute-warning-content-params">
                        <div class="title">Данные модели</div>
                        <div class="ss-dispute-warning-content-params-wrap">
                            <div class="inputs">
                                <div :class="{ 'lm-input-wrap': true, error: (verrors.has('measurement.height') || measurement.errors['measurement.body-parameters.height']) }">
                                    <label for="height" class="height">Рост, см</label>
                                    <input type="text" key="height" name="height" id="height"
                                        v-mask-static="'9{2,3}'"
                                        v-model="measurement['fields']['body-parameters']['height']"
                                        v-validate="'required|decimal:3|min_value:30|max_value:275'"
                                        data-vv-scope="measurement"
                                        :class="{
                                            'lm-input': true,
                                            'error': (verrors.has('measurement.height') || measurement.errors['measurement.body-parameters.height'])
                                        }"
                                        placeholder="0">
                                </div>
                                <div :class="{ 'lm-input-wrap': true, error: (verrors.has('measurement.weight') || measurement.errors['measurement.body-parameters.weight']) }">
                                    <label for="weight" class="weight">Вес, кг</label>
                                    <input type="text" key="weight" name="weight" id="weight"
                                        v-mask-static="'9{2,3}'"
                                        v-model="measurement['fields']['body-parameters']['weight']"
                                        v-validate="'required|decimal:3|min_value:10|max_value:275'"
                                        data-vv-scope="measurement"
                                        :class="{
                                            'lm-input': true,
                                            'error': (verrors.has('measurement.weight') || measurement.errors['measurement.body-parameters.weight'])
                                        }"
                                        placeholder="0">
                                </div>
                            </div>
                        </div>
                        <div class="title">Параметры модели</div>
                        <div class="ss-dispute-warning-content-params-wrap">
                            <div class="inputs">
                                <div :class="{ 'lm-input-wrap': true, error: (verrors.has('measurement.volume_of_breast') || measurement.errors['measurement.body-parameters.volume-of-breast']) }">
                                    <label for="volume_of_breast" class="chest">Грудь, см</label>
                                    <input type="text" key="volume_of_breast" name="volume_of_breast" id="volume_of_breast"
                                        v-mask-static="'9{2,3}'"
                                        v-model="measurement['fields']['body-parameters']['volume-of-breast']"
                                        v-validate="'required|decimal:3|min_value:25|max_value:150'"
                                        data-vv-scope="measurement"
                                        :class="{
                                            'lm-input': true,
                                            'error': (verrors.has('measurement.volume_of_breast') || measurement.errors['measurement.body-parameters.volume-of-breast'])
                                        }"
                                        placeholder="0">
                                </div>
                                <div :class="{ 'lm-input-wrap': true, error: (verrors.has('measurement.waist') || measurement.errors['measurement.body-parameters.waist']) }">
                                    <label for="waist" class="waist">Талия, см</label>
                                    <input type="text" key="waist" name="waist" id="waist"
                                        v-mask-static="'9{2,3}'"
                                        v-model="measurement['fields']['body-parameters']['waist']"
                                        v-validate="'required|decimal:3|min_value:25|max_value:150'"
                                        data-vv-scope="measurement"
                                        :class="{
                                            'lm-input': true,
                                            'error': (verrors.has('measurement.waist') || measurement.errors['measurement.body-parameters.waist'])
                                        }"
                                        placeholder="0">
                                </div>
                                <div :class="{ 'lm-input-wrap': true, error: (verrors.has('measurement.hips') || measurement.errors['measurement.body-parameters.hips']) }">
                                    <label for="hips" class="byrd">Бедра, см</label>
                                    <input type="text" key="hips" name="hips" id="hips"
                                        v-mask-static="'9{2,3}'"
                                        v-model="measurement['fields']['body-parameters']['hips']"
                                        v-validate="'required|decimal:3|min_value:25|max_value:150'"
                                        data-vv-scope="measurement"
                                        :class="{
                                            'lm-input': true,
                                            'error': (verrors.has('measurement.hips') || measurement.errors['measurement.body-parameters.hips'])
                                        }"
                                        placeholder="0">
                                </div>
                            </div>
                        </div>
                        <div class="text-desc">Все цифры указываются без дробей</div>
                    </div>
                </div>
                <a href="javascript:void(0)" class="lm-primary-button full" @click="validateMeasurement()" v-if="!measurement.loading">СОХРАНИТЬ ПАРАМЕТРЫ</a>
                <loader v-if="measurement.loading" class="loader-button-certification"></loader>
            </tab>
            <tab title="Фото" style="padding: 0" v-if="work_has_photo">
                <div class="ss-dispute-warning-content">
                    <v-dropzone id="dropzone" class="lm-file-upload vue-dropzone dropzone"
                        key="dropzone"
                        ref="dropzone"
                        :options="photos.dropzone.options"
                        @vdropzone-file-added="_handleDropzoneFileAdded"
                        @vdropzone-error-multiple.once="_handleDropzoneErrorUpload"
                        @vdropzone-success-multiple="_handleDropzoneSuccessUpload"
                        @vdropzone-sending-multiple="_handleDropzoneSendingUpload"
                        :includeStyling="false">
                    </v-dropzone>
                </div>
               <a href="javascript:void(0)" :class="[{ disabled: works[PHOTO]['min'] > count_added_photos }, 'lm-primary-button', 'full']" @click="savePhotos()">
                    отправить
                    <template v-if="( works[PHOTO]['min'] > count_added_photos )">
                        (осталось {{ (works[PHOTO]['min'] - count_added_photos) | pluralize(['фотография', 'фотографии', 'фотографий']) }})
                    </template>
                </a>
            </tab>
            <tab title="Видео" style="padding: 0" v-if="work_has_video">
                <div class="ss-dispute-warning-content">
                </div>
            </tab>
        </tabs>

    </div>
</template>

<script>
import CertifyingSpecialist from '@modules/CertifyingSpecialist';
import { PHOTO, VIDEO, MEASUREMENT } from '@modules/CertifyingSpecialist/Enums/Services';
import { mapGetters } from 'vuex';

const BASE_URL = process.env.BASE_URL;

export default {
    props: {
        order: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            PHOTO, VIDEO, MEASUREMENT,
            loading: false,
            success: false,
            error: false,
            measurement: {
                fields: {
                    'body-parameters': {
                        'height': null,
                        'volume-of-breast': null,
                        'weight': null,
                        'waist': null,
                        'hips': null
                    }
                },
                loading: false,
                errors: {}
            },
            photos: {
                data: [],
                loading: false,
                errors: [],
                dropzone: {
                    instance: undefined,
                    options: {
                        url: `${BASE_URL}api/v2/certifying-specialists/orders/${this.order.id}/photos`,
                        headers: this.headersDropzone(),
                        paramName: 'files',
                        acceptedFiles: 'image/*',
                        autoProcessQueue: false,
                        uploadMultiple: true,
                        parallelUploads: 3,
                        maxFiles: 3,
                        thumbnailWidth: 200,
                        addRemoveLinks: false,
                        dictDefaultMessage: this.dictDefaultMessage(),
                        previewTemplate: this.templateDropzone(),
                    }
                }
            }
        }
    },
    computed: {
        service() {
            if (!this.order) return {};
            return this.order.service.data;
        },
        works() {
            if (!this.service) return {};
            return this.service.works;
        },
        worksKeys() {
            if (!this.works) return [];
            return Object.keys(this.works);
        },
        work_has_measurement() {
            if (!this.works) return;
            return this.worksKeys.includes(MEASUREMENT);
        },
        work_has_photo() {
            if (!this.works) return;
            return this.worksKeys.includes(PHOTO);
        },
        work_has_video() {
            if (!this.works) return;
            return this.worksKeys.includes(VIDEO);
        },
        count_added_photos() {
            const instance =  this.photos.dropzone.instance;
            if (instance) {
                return instance.files.length;
            }

            return;
        }
    },
    created() {
        if (this.work_has_measurement && this.order['measurement']) {
            let { data } = this.order['measurement'];
            for (let index in data['body-parameters']) {
                if (typeof(this.measurement.fields['body-parameters'][index]) === 'undefined') return;
                this.measurement.fields['body-parameters'][index] = data['body-parameters'][index];
            }
        }

        if (this.work_has_photo && this.order['photos']) {
            let { data } = this.order['photos'];
            this.photos['data'] = data;
        }
    },
    mounted() {
        this.photos.dropzone.options.headers = { 'Authorization': 'Bearer ' + this.accessToken };

        if (this.work_has_photo) {
            this.photos.dropzone.instance = this.$refs.dropzone.dropzone;
        }
    },
    methods: {
        validateMeasurement() {
            this.$validator.validateAll('measurement').then(result => {
                if (result) {
                    this.saveMeasurement();
                }
            });
        },
        saveMeasurement() {
            this.measurement.loading = true;

            let { fields } = this.measurement

            this.$api.post(`/api/v2/certifying-specialists/orders/${this.order.id}/measurements`, { measurement: fields }).then((response) => {
                this.measurement.loading = false;

                let data = JSON.parse(JSON.stringify(this.measurement.fields));
                this.$emit('update', 'measurement', data);
            }, (error) => {

                this.measurement.loading = false;

                const { response: { data }, response: { status } } = error;
                if (status === 422 && data.errors) {
                    this.measurement.errors = data.errors;
                } else throw new Error(`Error attach measurements ${this.order.id}`);
            });
        },
        savePhotos() {
            const instance =  this.photos.dropzone.instance;
            let count = instance.files.length;

            if (count < this.works[PHOTO]['min']) return;

            this.$nextTick(() => {
                instance.processQueue();
            });
        },
        _handleDropzoneFileAdded(file) {
            const instance =  this.photos.dropzone.instance;
            let count = instance.files.length;

            if (count > this.works[PHOTO]['min']) {
                instance.removeFile(file);
            }
        },
        _handleDropzoneErrorUpload(files, error, xhr) {

            console.log('handle error', files, error, xhr);


            const instance =  this.photos.dropzone.instance;

            if (error.status_code === 422) {

                // console.log(error);
                let { errors } = error;
                console.log(errors);

                // instance.removeFile(file);
            } else if (error.status_code === 401) {
                console.log('401');
            } else if (typeof error !== 'object') {
                instance.removeAllFiles();
            } else {
                instance.removeAllFiles();
                throw new Error('Error upload file');
            }


        },
        _handleDropzoneSuccessUpload(file, response) {
            // console.log(file, response)
        },
        _handleDropzoneSendingUpload(file, xhr, formData) {
            // console.log(file, xhr, formData);
        },
        templateDropzone() {
            return `
                <div id="dz-preview-template">
                    <div class="dz-preview dz-file-preview">
                        <div class="dz-image">
                            <div class="remove-image icon-close2" data-dz-remove></div>
                            <img data-dz-thumbnail/>
                        </div>
                        <div class="dz-progress--preloader">
                            <div class="lm-file-upload--title uploading dz-progress" data-dz-uploadprogress>&nbsp;</div>
                        </div>
                        <div class="dz-error-message"><span data-dz-errormessage></span></div>
                        <div class="dz-success-mark"></div>
                        <div class="dz-error-mark"></div>
                    </div>
                </div>
            `;
        },
        headersDropzone() {
            let accessToken = this.$store.state.auth.accessToken;
            return  { 'Authorization': 'Bearer ' + accessToken };
        },
        dictDefaultMessage() {
            let { works } = this.order.service.data;
            let pluralizeMinPhotos = this.$pluralize(works[PHOTO]['min'], ['фотография', 'фотографии', 'фотографий']);

            return `
                <div class="lm-file-upload--title upload">Загрузить ${ pluralizeMinPhotos }</div>
                <div class="lm-file-upload--desc">${ works[PHOTO]['extensions'].toUpperCase() } разрешением не менее ${ works[PHOTO]['min_dpi'] }dpi</div>
            `;
        },
        stopWork() {
            this.loading = false;

            this.$api.post(`/api/v2/certifying-specialists/orders/${this.order.id}/status/stop_work`).then((response) => {
                this.loading = false;
                this.success = true;
                this.error = false;
                this.$emit('stop-work');
            }, (response) => {
                this.loading = false;
                this.success = false;
                this.error = true;

                throw new Error(`Error stop work order#${this.order.id}`);
            });
        }
    }
}
</script>

<style lang="sass">
    .loader-button-certification
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
</style>
