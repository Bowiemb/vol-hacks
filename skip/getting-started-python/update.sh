#!/bin/bash

docker build -t gcr.io/skip-01/bookshelf .
gcloud docker -- push gcr.io/skip-01/bookshelf
kubectl delete deployments bookshelf-frontend
kubectl delete deployments bookshelf-worker
kubectl delete deployments bookshelf-service
kubectl create -f bookshelf-frontend.yaml
kubectl create -f bookshelf-worker.yaml
kubectl create -f bookshelf-service.yaml
