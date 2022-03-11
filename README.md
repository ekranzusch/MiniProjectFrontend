# MiniProjectFrontend

### start minikube
```bash
minikube start
```
### set up environment
```bash
eval $(minikube docker-env)
```

### build docker image
```bash
docker build -t front-end-node .
```

### deploy redis, the redis service, front-end-node, and front-end-node service
```bash
kubectl apply -f kubernetes-test/redis-leader-deployment.yaml
kubectl apply -f kubernetes-test/redis-leader-service.yaml
kubectl apply -f kubernetes-test/front-end-deployment.yaml
kubectl apply -f kubernetes-test/front-end-service.yaml
```

### set up tunnel to access load balancer
```bash
minikube tunnel
```

### should be able to curl localhost:3000
```bash
curl -i http://localhost:3000
```

<!-- 
kubectl delete -f kubernetes-test/front-end-deployment.yaml
 -->
