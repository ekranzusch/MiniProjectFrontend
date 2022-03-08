# MiniProjectFrontend

### set up environment
```bash
eval $(minikube docker-env)
```

### start minikube
```bash
minikube start
```

### start redis
```bash
kubectl apply -f kubernetes-test/redis-leader-deployment.yaml
kubectl apply -f kubernetes-test/redis-leader-service.yaml
```

### build docker image
```bash
docker build -t front-end-node .
```

### start front end
```bash
kubectl apply -f kubernetes-test/front-end-deployment.yaml
kubectl apply -f kubernetes-test/front-end-service.yaml
```
<!-- 
kubectl delete -f kubernetes-test/front-end-deployment.yaml
 -->

### set up tunnel to access load balancer
```bash
minikube tunnel
```

### should be able to curl localhost:3000
```bash
curl -i http://localhost:3000
```
