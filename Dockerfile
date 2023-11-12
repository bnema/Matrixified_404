FROM golang:latest

WORKDIR /app

COPY . .

RUN go mod tidy

RUN go build -o main .

CMD [ "./main" ]

# docker buildx build --platform linux/arm64,linux/amd64 -t ghcr.io/bnema/nerd-digital-rain:latest .