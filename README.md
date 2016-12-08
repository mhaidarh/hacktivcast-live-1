# Hacktivcast Live 1

A simple service to access GitHub API that will get top 10 developers in Indonesia.

For example:

```sh
# Top 10 Developers in Indonesia
# [photo] | username | location | followers | public repos | public gists
```

## Configuring

Copy `ecosystem.sample.json` to `ecosystem.json`. Then put `GITHUB_TOKEN` with created API key from <https://github.com/settings/tokens>.

## Running

```sh
# install
npm install

# run app
npm start

# view process log
pm2 log

# get data
# open this in other window
curl localhost:3000
```
