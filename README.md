## Tests:
    ng serve --open --configuration=mock

    ng serve --open --configuration=development

    ng serve --open --configuration=production

Each profile inject a correct AuthService Dependency!

## Profiles

    export const environment = {
        production: false,
        authClass: AuthDevService
    };

    export const environment = {
        production: false,
        authClass: AuthMockService
    };

    export const environment = {
        authClass: AuthProdService
    };


## See AppModule

    providers: [
        { provide: AuthService, useClass: environment.authClass }
    ],

