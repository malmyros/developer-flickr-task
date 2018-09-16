# developer-flickr-task

To run this application you need to take the following
steps:

1). Checkout the project from github

`
git clone https://github.com/malmyros/developer-flickr-task.git
`

2). Navigate to the folder where you clone the repository.

3). Install all the required module in `package.json` file.

`
yarn install
`

You will also need an api key in order to consume
the flickr api. You can get one from here:

[Apply for flickr's api key](https://www.flickr.com/services/apps/create/apply)

Once you have received your api key you can replace the `#########`
with your key in `./src/api/index.js`.

4). Finally your start the app which will automatically open
your browser in `http://localhost:3000` using:

`yarn run start`