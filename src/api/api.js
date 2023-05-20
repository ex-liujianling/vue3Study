import service from '@/untils/service'
export function login(data) {
    return service({
        methods: 'post',
        url: '/login',
        data
    })
}