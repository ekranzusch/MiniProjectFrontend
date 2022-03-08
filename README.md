# MiniProjectFrontend

### set up environment
```bash
eval $(minikube docker-env)
docker build -t starwars-node .
```

### Add configs for front end
```bash
kubectl apply -f kubernetes-test/sw-deployment.yaml
kubectl apply -f kubernetes-test/sw-service.yaml
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
