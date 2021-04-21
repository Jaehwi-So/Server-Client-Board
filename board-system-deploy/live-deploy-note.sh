zip -r ./latest.zip ./docker-compose.yml ../board-server-webpack-dist 
# 빌드 결과물을 압축하여

pscp -P 22 ./latest.zip mediatest@172.30.1.58:/home/mediatest/Desktop/remote/latest.zip 
# 테스트 서버로 보냄

rm ./latest.zip
# 압축 파일은 지움


# update.sh

#!/bin/bash

#rm /home/media/remote-dir/latest.zip

#wget http://192.168.0.2/Temp/pb/latest.zip

unzip -o -q /home/media/remote-dir/latest.zip -d /home/media/app    # 압축을 해제함
rm /home/media/remote-dir/latest.zip
#docker build -t node-app /home/media/app/pubbling-docker-node

#docker build -t mariadb-cnf /home/media/app/pubbling-docker-mariadb

#docker build -t nginx-cnf /home/media/app/pubbling-docker-nginx

#cp /home/media/app/pubbling-docker-node/docker-compose.yaml /home/media/docker-compose.yaml

docker-compose build    # Docker 빌드

docker-compose stop     # 현재 컨테이너 중지

docker-compose rm -f    # 현재 컨테이너 삭제

docker-compose up -d    # 컨테이너 실행(백그라운드에서)

