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
        IDENTITY_POOL_ID: "us-east-1:89bac36f-eeed-4d09-a2aa-fbec72a46e8c",
        USER_POOL_ID: "us-east-1_SdUOBMTVz",
        APP_CLIENT_ID: "6gfr4dh3894vdbvqqcgrd0fnh"
    }
};

