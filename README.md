# Natural Language Classifier | Stevens' Academic Dataset Demo [![Build Status](https://travis-ci.org/watson-developer-cloud/natural-language-classifier-nodejs.svg?branch=master)](http://travis-ci.org/watson-developer-cloud/natural-language-classifier-nodejs)

  This Repository contains the Natural Language Classifier example on the Stevens' Academic Dataset. This NLC service will classify the End user questions into a class that can be fed to R&R Service to get the corressponding answer documents. 
  
The IBM Watson&trade; Natural Language Classifier service applies deep learning techniques to make predictions about the best predefined classes for short sentences or phrases. The classes can trigger a corresponding action in an application, such as directing a request to a location or person, or answering a question. After training, the service returns information for texts that it hasn't seen before. The response includes the name of the top classes and confidence values.

Give it a try! Click the button below to fork into IBM DevOps Services and deploy your own copy of this application on Bluemix.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/watson-developer-cloud/natural-language-classifier-nodejs)

## Getting started

1. You need a Bluemix account. If you don't have one, [sign up][sign_up]. Experimental Watson Services are free to use.

1. Download and install the [Cloud-foundry CLI][cloud_foundry] tool if you haven't already.

1. Edit the `manifest.yml` file and change `<application-name>` to something unique. The name you use determines the URL of your application. For example, `<application-name>.mybluemix.net`.

	```yaml
	applications:
	- services:
	  - my-service-instance
	  name: <application-name>
	  command: npm start
	  path: .
	  memory: 512M
	```

1. Connect to Bluemix with the command line tool.

	```sh
	$ cf api https://api.ng.bluemix.net
	$ cf login -u <your user ID>
	```

1. Create the Natural Language Classifier service in Bluemix.

	```sh
	$ cf create-service natural_language_classifier standard my-service-instance
	```

1. Push your app to make it live:

	```sh
	$ cf push
	```

1. [Create and train](http://www.ibm.com/watson/developercloud/doc/nl-classifier/get_start.shtml#create) the NLC service using the weather training data. Take note of the `<classifier-id>`.

1. To configure the [app.js](app.js#L48) file to use your classifier, export the classifier ID as an environment variable.

	```sh
	$ cf set-env <application-name> CLASSIFIER_ID <classifier-id>
	```

1. Finally, restage the application to ensure the environment variable is set.

	```sh
	$ cf restage <application-name>
	```

	For more details about developing applications that use Watson Developer Cloud services in Bluemix, see [Getting started with Watson Developer Cloud and Bluemix][getting_started].

## Running locally

1. Download and install [Node.js](http://nodejs.org/) and [npm](https://www.npmjs.com/).

1. Create an instance of the Natural Language Classifier service on Bluemix.

1. [Create and train](http://www.ibm.com/watson/developercloud/doc/nl-classifier/get_start.shtml#create) the NLC service using, for example, the weather training data. Note the value of the `Classifier ID` in the response.

1. Configure the code to connect to your service:

	1. Copy the credentials from your `my-service-instance` service in Bluemix. Run the following command:

		```sh
		$ cf env <application-name>
		```

		Example output:

		```sh
		System-Provided:
		{
		  "VCAP_SERVICES": {
			"natural_language_classifier": [
			  {
				"credentials": {
				  "password": "<password>",
				  "url": "<url>",
				  "username": "<username>"
				}
				"label": "natural-language-classifier",
				"name": "my-service-instance",
				"plan": "standard",
				"tags": [
				  ...
				]
			  }
			]
		  }
		}
		```

	1. Rename `.env.example` to be `.env` and update it with `username`, `password`, and `Classifier ID`.

	```none
  CLASSIFIER_ID=
  NATURAL_LANGUAGE_CLASSIFIER_USERNAME=
  NATURAL_LANGUAGE_CLASSIFIER_PASSWORD=
  ```

1. Install the dependencies:

	```sh
	$ npm install
	```

1. Start the application:

	```sh
	npm start
	```

1. Point your browser to [http://localhost:3000](http://localhost:3000).


## Troubleshooting

* The main source of troubleshooting and recovery information is the Bluemix log. To view the log, run the following command:

  ```sh
  $ cf logs <application-name> --recent
  ```

* For more details about the service, see the [documentation][nlc_docs] for the Natural Language Classifier.


----

### Directory structure

```none
.
├── app.js                      // express routes
├── config                      // express configuration
│   ├── error-handler.js
│   ├── express.js
│   └── security.js
├── manifest.yml
├── package.json
├── public                      // static resources
├── server.js                   // entry point
├── test                        // unit tests
├── training
│   └── weather_data_train.csv  // training file
└── views                       // react components
```

## License

  This sample code is licensed under Apache 2.0.

## Contributing

  See [CONTRIBUTING](.github/CONTRIBUTING.md).

## Open Source @ IBM
  Find more open source projects on the [IBM Github Page](http://ibm.github.io/)

[deploy_track_url]: https://github.com/cloudant-labs/deployment-tracker
[cloud_foundry]: https://github.com/cloudfoundry/cli
[getting_started]: https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/getting_started/
[nlc_docs]: https://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/nl-classifier.html
[sign_up]: https://console.ng.bluemix.net/registration/ 
