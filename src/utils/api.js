/**
 * @author walid
 * @date 2017/3/5
 * @description API 封装工具类
 */
import BaseBean from "./BaseBean.js";
import qs from "qs";
import {urlEncode} from "utils/string";
let stream = weex.requireModule('stream')
const storage = weex.requireModule('storage')
// http base url
// const baseUrl = 'http://app.sanjiang.com/'
const baseUrl = 'http://193.0.1.157:20000/'

function getWithAuth(url, params) {

    var userModule = weex.requireModule('UserModule')
    userModule.getToken(function (token) {
        get(url, params, token)
    })


}
function api(opt) {


    // console.log('request:', `${baseUrl + url}?${qs.stringify(params)}`)
    console.log("api start")
    opt.params={"a":1}
    console.log(opt.params)

    let  url='';
    if (opt.params)
    {
        console.log("1")
        url = baseUrl + opt.url+'?'+qs.stringify(opt.params);
    }else {
        console.log("2")
        url = baseUrl + opt.url;
    }
    console.log(url)
    console.log(opt.params)
    stream.fetch({
        method: opt.method || 'GET',
        url: url,
        headers: {
            'x-auth-token': opt.token,
            terminal: '60'
        },
        type: 'json'
    }, function (res) {

        console.log(res)
        if (res.ok) {
            if (res.data && res.data.code == 1) {
                var basebean = new BaseBean(res);
                opt.success(basebean);

            } else {
                if (opts.onerrcode) {
                    opts.onerrcode(basebean);
                }
            }

        } else if (res.status == 401) {

            if (opts.forunlogin) {
                opts.forunlogin();
            } else {

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
    get, post, del, put,api
}
