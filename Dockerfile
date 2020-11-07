FROM node:12.19
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app/
WORKDIR $HOME/traffik

COPY package*.json $HOME/traffik/

RUN npm i --verbose

COPY . $HOME/traffik

RUN chown -R app:app $HOME/*

# CMD ["tail", "f", "/dev/null"]