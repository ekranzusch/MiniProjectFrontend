# MiniProjectFrontend

### set up environment
```bash
eval $(minikube docker-env)
docker build -t front-end-node .
minikube start
```

### Add configs for front end and redis
```bash
kubectl apply -f kubernetes-test/front-end-deployment.yaml
kubectl apply -f kubernetes-test/front-end-service.yaml
kubectl apply -f kubernetes-test/redis-leader-deployment.yaml
kubectl apply -f kubernetes-test/redis-leader-service.yaml
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
Extra commands
minikube service sw-service --url 
-->
