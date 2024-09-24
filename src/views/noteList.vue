<template>
    <div class="note-list">
        <ul>
            <li @click="goNoteDetail(item.id)" v-for="item in noteList" :key="item.id">
                <div class="img">
                    <img :src="item.head_img" alt="">
                </div>
                <div class="time">{{ item.m_time }}</div>
                <div class="title">{{ item.title }}</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import axios from '@/api/index.js';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const route = useRoute(); //获取路由信息
// console.log(route);

const router = useRouter();

const noteList = ref([]);

//向后端请求某分类下的日记列表数据
axios.get(`/findNoteListByType?note_type=${route.query.title}`).then((res) => {
    // console.log(res);
    noteList.value = res.data;
})
// async function getData() {
//     const res = await axios.get('/findNoteListByType', {
//         params: {
//             note_type: route.query.title
//         }
//     })
//     console.log(res);
// };
// getData();

const goNoteDetail = (id) => {
    router.push({ path: '/noteDetail' , query: { id: id}});
}
</script>

<style lang="less" scoped>
.note-list {
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 50px;
        grid-row-gap: 30px;

        li {
            font-size: 0.37rem;

            img {
                width: 100%;
                height: 4rem;
                border-radius: 0.27rem;
            }

            .title {
                margin-top: 5px;
            }
        }
    }
}
</style>