/**
 * @author walid
 * @date 2017/3/5
 * @description API 封装工具类
 */

import qs from "qs";
import {urlEncode} from "utils/string";
let stream = weex.requireModule('stream')
const storage = weex.requireModule('storage')
// http base url
const baseUrl = 'http://app.sanjiang.com/'
function getWithAuth(url, params) {

    var userModule = weex.requireModule('UserModule')
    userModule.getToken(function (token) {
        get(url, params, token)
    })


}

function get(url, params, token) {

    return new Promise((resolve, reject) => {
        console.log('request:', `${baseUrl + url}?${qs.stringify(params)}`)
        stream.fetch({
            method: 'GET',

            url: `${baseUrl + url}?${qs.stringify(params)}`,
            headers:{
                "x-auth-token":"9db420ec-d67e-4c6e-8a6e-dbea1976999b",
                terminal:'60'
            },
            type: 'json'
        }, res => {

            // let stringify = qs.stringify({
            //     a:"aaa",
            //     qwe:"qwe",
            // });
            // console.log(stringify)
            console.log(res)
            if (res.ok && res.data && res.data.code == 1) {
                console.log("then")
                resolve(res.data)
            } else {
                console.log("catch")
                reject(res.data)
            }
        })
    })
}

function post(url, body) {
    return new Promise((resolve, reject) => {
        stream.fetch({
            method: 'POST',
            url: baseUrl + url,
            type: 'json',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }, res => {
            if (res.ok && res.data && res.data.code === 0) {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }, progress => {
            console.log('get in progress:' + progress.length)
        })
    })
}

function del(url) {
    return new Promise((resolve, reject) => {
        stream.fetch({
            method: 'DELETE',
            url: baseUrl + url,
            type: 'json'
        }, res => {
            if (res.ok && res.data && res.data.code === 0) {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }, progress => {
            console.log('get in progress:' + progress.length)
        })
    })
}

function put(url, body) {
    return new Promise((resolve, reject) => {
        stream.fetch({
            method: 'PUT',
            url: baseUrl + url,
            type: 'json',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }, res => {
            if (res.ok && res.data && res.data.code === 0) {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }, progress => {
            console.log('get in progress:' + progress.length)
        })
    })
}

export default {
    get, post, del, put
}
