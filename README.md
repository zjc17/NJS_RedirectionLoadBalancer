# NJS_RedirectionLoadBalancer

## 简介

基于 Nginx JS 封装的重定向负载均衡器，实现自动转发请求至不同地址的功能。镜像大小约22MB

## 使用说明

在项目目录执行 docker-compose up -d 即可部署，使用 `curl -I 127.0.0.1:8080` 测试随机重定向

## 性能评估

在2c4g的ubuntu20服务器上执行 `ab -n 5000 -c 1000 http://127.0.0.1:8080/`, 结果如下

![image](https://user-images.githubusercontent.com/32964977/119777905-6674d900-bef9-11eb-8cb6-aa43a45b5100.png)

