# Local Setup

Python 3 and [Pipenv](https://docs.pipenv.org/) need to already be installed. If you need more complete local dev instructions, [see here](https://djangoforbeginners.com/initial-setup/).

Clone the repo to your computer. For example, to place it on your `Desktop`.

```
$ cd ~/Desktop
$ git clone https://github.com/wsvincent/django-rest-framework-react-tutorial.git
$ cd django-rest-framework-react-tutorial
```

## Backend

Change into the `backend` directory, install the `Pipenv` packages, start a new shell, and run the local server.

```
$ cd backend
$ pipenv install
$ pipenv shell
$ ./manage.py runserver
```

You can see the API now at [http://127.0.0.1:8000/api](http://127.0.0.1:8000/api)

## Frontend

Open up a new command line console so there are now **two** open. Navigate to the `frontend` directory.

```
$ cd ~/Desktop
$ cd django-rest-framework-react-tutorial
$ cd frontend
```

Make sure React is already installed globally. If not `$ npm install -g create-react-app`.

Then start the React server:

```
$ npm start
```

Navigate to [http://localhost:3000/](http://localhost:3000/) to see a list of our DRF backend content outputted using React.
