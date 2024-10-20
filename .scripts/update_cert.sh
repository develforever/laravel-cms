#!/bin/bash
#
# For Ubuntu you may use this script
#

docker compose cp frankenphp:/data/caddy/pki/authorities/local/root.crt ./root.crt

sudo mv root.crt /usr/share/ca-certificates/localhost.crt

# if this is not present i your congih
#echo "localhost.crt" | sudo tee -a /etc/ca-certificates.conf

sudo update-ca-certificates
