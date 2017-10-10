/**
 * @author walid
 * @date 2017/3/5
 * @description API 封装工具类
 */
import BaseBean from "./BaseBean.js";
import qs from "qs";
import {urlEncode} from "utils/string";
import nlib from "./nlib";
let stream = weex.requireModule('stream')
const modal = weex.requireModule('modal')
// http base url
// const baseUrl = 'http://srv0.sanjiang.info:20000/'
const baseUrl = 'http://193.0.1.157:20000/'
var debug = true;
// function apiauth(opt) {
//     // opt.token="ece87dcd-8fcf-4cd6-ba59-9a864cd244f2";
//
//     if (debug)
//     {
//         opt.token="ece87dcd-8fcf-4cd6-ba59-9a864cd244f2";
//         api(opt)
//     }else {
//         var userModule = weex.requireModule('UserModule')
//         userModule.getToken(function (token) {
//             // opt.token="ece87dcd-8fcf-4cd6-ba59-9a864cd244f2";
//             opt.token=token;
//             api(opt)
//         })
//     }
//
//
//
// }
function api(opt) {


    // console.log('request:', `${baseUrl + url}?${qs.stringify(params)}`)
    console.log("api start")

    console.log(opt.params)


    opt.token = weex.config.token
    opt.token = "84d23e89-9702-4e99-a4a8-44d2db9dffeb"
    // modal.toast({
    //     message: 'opt.token' + opt.token,
    //     duration: 0.8
    // })

    let url = '';
    if (opt.params) {
        url = baseUrl + opt.url + '?' + qs.stringify(opt.params);
    } else {
        url = baseUrl + opt.url;
    }
    console.log(url)
    console.log(opt.params)
    console.log(opt.params)
    if (opt.loading != null) {
        if (weex.config.env.platform != 'Web') {
            weex.requireModule('event-module').showLoading();
        }
    }


    stream.fetch({
        method: opt.method || 'GET',
        url: url,
        body:JSON.stringify(opt.body),
        headers: {
            'x-auth-token': opt.token,
            terminal: '60',
            // shopid: weex.config.shopid
            shopid: '00530'
        },
        type: 'json'
    }, function (res) {
        console.log("aa")
        console.log(weex.config.env.platform != 'Web')
        if (weex.config.env.platform != 'Web') {
            nlib.log.log(res)
        }

        console.log(res)
        if (res.ok) {
            var basebean = new BaseBean(res);
            if (res.data && res.data.code == 1) {

                opt.success(basebean);

            } else {
                if (opt.onerrcode) {
                    opt.onerrcode(basebean);
                }
            }

        } else if (res.status == 401) {

            if (opt.forunlogin) {
                opt.forunlogin();
            } else {

            }

        }
        if (opt.loading != null) {
            if (weex.config.env.platform != 'Web') {
                weex.requireModule('event-module').hideLoading();
            }

        }

    })

}

function get(url, params, token) {

    return new Promise((resolve, reject) => {
        console.log('request:', `${baseUrl + url}?${qs.stringify(params)}`)
        stream.fetch({
            method: 'GET',

            url: `${baseUrl + url}?${qs.stringify(params)}`,
            headers: {
                "x-auth-token": "9db420ec-d67e-4c6e-8a6e-dbea1976999b",
                terminal: '60'
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
    get, post, del, put, api
}
