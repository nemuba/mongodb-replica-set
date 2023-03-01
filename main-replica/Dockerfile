FROM mongo:6

RUN mkdir /config
RUN mkdir -p /var/log/mongodb/

WORKDIR /config

COPY ./config/wait-for-it.sh .
COPY ./config/mongo-setup.sh .
COPY ./config/wait-and-start.sh .
COPY ./config/replica-script.js .

RUN chmod +x wait-and-start.sh
RUN chmod +x wait-for-it.sh
RUN chmod +x mongo-setup.sh

EXPOSE 30001

CMD ["sh","-c","/config/wait-and-start.sh"]
