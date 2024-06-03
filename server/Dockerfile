FROM node:20

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV DATABASE_URL="postgres://postgres:123456@postgres_container:5432/student_api_db?schema=public"

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "start:dev"]