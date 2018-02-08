// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


//i angular används environment ist för .env filen om j vill skydda tex min api nyckel.
// import denna filen i tex recipes som bygger upp api URLen.
export const environment = {
  production: false,
  APP_KEY: '7810d4b16274ce38760f7a2413af7f99',
  APP_ID: 'cb982510'
};
