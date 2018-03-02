export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        BUCKET: "noteappuploads"
    },
    apiGateway: {
        URL: "https://fkzcppjr5f.execute-api.us-east-1.amazonaws.com/prod",
        REGION: "us-east-1"
    },
    cognito: {
        REGION: "us-east-1",
        IDENTITY_POOL_ID: "YOUR IDENTITIY POOL ID",
        USER_POOL_ID: "userpool id",
        APP_CLIENT_ID: "YOUR APP CLIENT ID"
    }
};

