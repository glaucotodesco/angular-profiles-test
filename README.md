# Tests:
    ng serve --open --configuration=mock

    ng serve --open --configuration=development
    
    ng serve --open --configuration=production

Each profile inject a correct AuthService Dependency!

## Profile

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


## AppModule

providers: [
    { provide: AuthService, useClass: environment.authClass }
],

