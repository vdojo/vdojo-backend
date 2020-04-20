# VDojo backend

Simple API. Uses `routing-controllers` and `typegoose` to connect to MongoDB

## Usage

### Serve locally

- create local `.env` file:

        DB_HOST=put_MongoDB_conn_string_here
        
- run `npm install` 
- run `npm run start`
    
### GAE

- setup Google Cloud SDK: https://cloud.google.com/sdk/
- run `gcloud init`, pick name and project
- change `app.yaml.sample` to `app.yaml`
- change environmental variables values
- run `npm run deploy`