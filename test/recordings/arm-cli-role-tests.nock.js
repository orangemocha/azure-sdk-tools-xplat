// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '358f3860-9dbe-4ace-b0c0-3d4f2d861014',
    name: 'adminSubscription123',
    username: 'user@domain.example',
    tenantId: 'c78c1b8a-fc25-436c-9a5e-e8d89595436a',
    registeredProviders: [],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['rdfenext']));

  return newProfile;
};

exports.setEnvironment = function() {
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .get('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleDefinitions()?')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/$metadata#roleDefinitions\",\"value\":[\r\n    {\r\n      \"roleId\":\"be21d9e2-3caf-4ef2-a7b2-5339196d939b\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"acdd72a7-3385-48ef-bd42-f606fba81ae7\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Reader\",\"description\":\"Reader role allowing only read operations\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"b24988ac-6180-42a0-ab88-20f7382dd24c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Reader\",\"description\":\"GETs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"GET\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"43137be5-c198-403e-8b8e-cfcb933bf291\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Writer\",\"description\":\"PUTs / POSTs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"POST\",\"PUT\"\r\n          ]\r\n        },{\r\n          \"actions\":[\r\n            \"SomeRandomCondition\"\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  dataserviceversion: '3.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:44 GMT',
  'content-length': '1762' });
 return result; }],
[function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .get('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleDefinitions()?')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/$metadata#roleDefinitions\",\"value\":[\r\n    {\r\n      \"roleId\":\"be21d9e2-3caf-4ef2-a7b2-5339196d939b\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"acdd72a7-3385-48ef-bd42-f606fba81ae7\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Reader\",\"description\":\"Reader role allowing only read operations\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"b24988ac-6180-42a0-ab88-20f7382dd24c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Reader\",\"description\":\"GETs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"GET\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"43137be5-c198-403e-8b8e-cfcb933bf291\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Writer\",\"description\":\"PUTs / POSTs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"POST\",\"PUT\"\r\n          ]\r\n        },{\r\n          \"actions\":[\r\n            \"SomeRandomCondition\"\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  dataserviceversion: '3.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:44 GMT',
  'content-length': '1762' });
 return result; }],
[function (nock) { 
var result = 
nock('https://graph.ppe.windows.net:443')
  .get('/c78c1b8a-fc25-436c-9a5e-e8d89595436a/users/admin@aad240.ccsctp.net?api-version=1.42-previewInternal')
  .reply(200, "{\"odata.metadata\":\"https://graph.ppe.windows.net/c78c1b8a-fc25-436c-9a5e-e8d89595436a/$metadata#directoryObjects/Microsoft.WindowsAzure.ActiveDirectory.User/@Element\",\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.User\",\"objectType\":\"User\",\"objectId\":\"d4cabc17-0ae7-4855-8bec-89797db15fb0\",\"softDeletionTimestamp\":null,\"acceptedAs\":null,\"acceptedOn\":null,\"accountEnabled\":true,\"alternativeSecurityIds\":[],\"appMetadata\":null,\"assignedLicenses\":[],\"assignedPlans\":[],\"city\":\"Redmond\",\"country\":null,\"creationType\":null,\"department\":null,\"dirSyncEnabled\":null,\"displayName\":\"Jon Doe\",\"extensionAttribute1\":null,\"extensionAttribute2\":null,\"extensionAttribute3\":null,\"extensionAttribute4\":null,\"extensionAttribute5\":null,\"extensionAttribute6\":null,\"extensionAttribute7\":null,\"extensionAttribute8\":null,\"extensionAttribute9\":null,\"extensionAttribute10\":null,\"extensionAttribute11\":null,\"extensionAttribute12\":null,\"extensionAttribute13\":null,\"extensionAttribute14\":null,\"extensionAttribute15\":null,\"facsimileTelephoneNumber\":null,\"givenName\":\"Jon\",\"immutableId\":null,\"invitedOn\":null,\"inviteReplyUrl\":[],\"inviteResources\":[],\"inviteTicket\":[],\"jobTitle\":null,\"lastDirSyncTime\":null,\"mail\":null,\"mailNickname\":\"admin\",\"mobile\":\"+1 (123) 456-7890\",\"netId\":\"1003BFFD87ECD609\",\"onPremiseSecurityIdentifier\":null,\"otherMails\":[\"jon@doe.com\"],\"passwordPolicies\":\"DisablePasswordExpiration\",\"passwordProfile\":null,\"physicalDeliveryOfficeName\":null,\"postalCode\":\"98052\",\"preferredLanguage\":null,\"primarySMTPAddress\":null,\"provisionedPlans\":[],\"provisioningErrors\":[],\"proxyAddresses\":[],\"selfServePasswordResetData\":null,\"sipProxyAddress\":null,\"smtpAddresses\":[],\"state\":\"WA\",\"streetAddress\":\"One Microsoft Way\",\"surname\":\"Doe\",\"telephoneNumber\":null,\"usageLocation\":null,\"userPrincipalName\":\"admin@aad240.ccsctp.net\",\"userState\":null,\"userStateChangedOn\":null,\"userType\":\"Member\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  'ocp-aad-diagnostics-server-name': 'h18CQeQQ6hNksP2st9xsNS1OU3V1ecOI0YBiucSafCY=',
  'request-id': 'e9a0e132-a1f3-4b1b-b2da-fb9abf9fbe8c',
  'client-request-id': '80e42d1d-c3bc-491c-b8d8-17e175915362',
  'x-ms-gateway-rewrite': 'false',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'ocp-aad-session-key': 'rhixm2sUQgGMi2_UvmCzFkWSaQ7mngLVYR3cvvvgD74Cjv7mr0-hkcrLH4veFdbt31xuaY_WIuAOpUSQV9g8kZ78F18nrwo2EPhsSHOlygE.sDFVZkXyMHvE86mTXXTetSg3aQVajX0eUBw5pEq5seQ',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0;',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:41 GMT',
  'content-length': '1873' });
 return result; },
function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .get('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleDefinitions()?')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/$metadata#roleDefinitions\",\"value\":[\r\n    {\r\n      \"roleId\":\"be21d9e2-3caf-4ef2-a7b2-5339196d939b\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"acdd72a7-3385-48ef-bd42-f606fba81ae7\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Reader\",\"description\":\"Reader role allowing only read operations\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"b24988ac-6180-42a0-ab88-20f7382dd24c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Reader\",\"description\":\"GETs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"GET\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"43137be5-c198-403e-8b8e-cfcb933bf291\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Writer\",\"description\":\"PUTs / POSTs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"POST\",\"PUT\"\r\n          ]\r\n        },{\r\n          \"actions\":[\r\n            \"SomeRandomCondition\"\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  dataserviceversion: '3.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:44 GMT',
  'content-length': '1762' });
 return result; },
function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleAssignments', '*')
  .reply(201, "{\r\n  \"odata.metadata\":\"https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/$metadata#roleAssignments/@Element\",\"roleAssignmentId\":\"17da6bb9-9a14-4cd7-a1e1-c388362d3026\",\"appId\":\"797f4846-ba00-4fd7-ba43-dac1f8f63013\",\"roleId\":\"be21d9e2-3caf-4ef2-a7b2-5339196d939b\",\"principalId\":\"d4cabc17-0ae7-4855-8bec-89797db15fb0\",\"scope\":\"SDKXplatUnitTest\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleAssignments(guid\'17da6bb9-9a14-4cd7-a1e1-c388362d3026\')',
  server: 'Microsoft-IIS/8.0',
  dataserviceversion: '3.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:45 GMT',
  'content-length': '373' });
 return result; },
function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .get('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleAssignments()?')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/$metadata#roleAssignments\",\"value\":[\r\n    {\r\n      \"roleAssignmentId\":\"17da6bb9-9a14-4cd7-a1e1-c388362d3026\",\"appId\":\"797f4846-ba00-4fd7-ba43-dac1f8f63013\",\"roleId\":\"be21d9e2-3caf-4ef2-a7b2-5339196d939b\",\"principalId\":\"d4cabc17-0ae7-4855-8bec-89797db15fb0\",\"scope\":\"SDKXplatUnitTest\"\r\n    },{\r\n      \"roleAssignmentId\":\"50a75654-acfb-47bd-b98f-4b038a2421e8\",\"appId\":\"797f4846-ba00-4fd7-ba43-dac1f8f63013\",\"roleId\":\"43137be5-c198-403e-8b8e-cfcb933bf291\",\"principalId\":\"d4cabc17-0ae7-4855-8bec-89797db15fb0\",\"scope\":\"ADXTest\"\r\n    },{\r\n      \"roleAssignmentId\":\"54cb6881-0a1c-4ee0-b230-4cf0b8912217\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"12edb772-da3a-4647-bff1-8b66f48c33bb\",\"scope\":\"/sub/123\"\r\n    },{\r\n      \"roleAssignmentId\":\"558b5d41-ca73-424a-ac84-8c34f587382e\",\"appId\":\"d8970c90-99db-4e64-ac25-9442815172e3\",\"roleId\":\"13affad2-ed47-46ae-98e9-aa40d3f55954\",\"principalId\":\"299b096d-6aef-4d34-bd66-efb5a2cf24e0\",\"scope\":\"UTTestScope\"\r\n    },{\r\n      \"roleAssignmentId\":\"56a0c88a-85ad-47e2-af35-b4d9e1503ecc\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"12edb772-da3a-4647-bff1-8b66f48c33bb\",\"scope\":\"/sub/123/resourcegroups/mygroup\"\r\n    },{\r\n      \"roleAssignmentId\":\"57f2e446-6118-4cbb-a04b-40c28727aad2\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"b6c365fc-3832-4dc8-b91e-24648bdb49b2\",\"scope\":\"/sub/123\"\r\n    },{\r\n      \"roleAssignmentId\":\"935c7e85-c42d-4097-892c-9b76b970577f\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"f46d4f6f-8a39-49a9-b34d-ca54add0a2ae\",\"scope\":\"/sub/123\"\r\n    },{\r\n      \"roleAssignmentId\":\"9e5720d4-0727-4108-9edb-96190ab2845b\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"43137be5-c198-403e-8b8e-cfcb933bf291\",\"principalId\":\"12edb772-da3a-4647-bff1-8b66f48c33bb\",\"scope\":\"/sub/456\"\r\n    },{\r\n      \"roleAssignmentId\":\"b22b7c3e-b452-4b97-90aa-06087caf047b\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"59875459-47b4-4ebd-971f-f16e588979d2\",\"scope\":\"/sub/123\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; odata=minimalmetadata; streaming=true; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  dataserviceversion: '3.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:45 GMT',
  'content-length': '2353' });
 return result; },
function (nock) { 
var result = 
nock('https://graph.ppe.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('//c78c1b8a-fc25-436c-9a5e-e8d89595436a/getObjectsByObjectIds?api-version=1.42-previewInternal', '*')
  .reply(200, "{\"odata.metadata\":\"https://graph.ppe.windows.net/c78c1b8a-fc25-436c-9a5e-e8d89595436a/$metadata#directoryObjects\",\"value\":[{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.StubDirectoryObject\",\"objectType\":\"User\",\"objectId\":\"d4cabc17-0ae7-4855-8bec-89797db15fb0\",\"softDeletionTimestamp\":null,\"displayName\":\"Jon Doe\",\"mail\":null,\"userPrincipalName\":\"admin@aad240.ccsctp.net\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  'ocp-aad-diagnostics-server-name': 'h18CQeQQ6hNksP2st9xsNS1OU3V1ecOI0YBiucSafCY=',
  'request-id': '8ed29c98-d7b6-485d-9ce1-5ae38888142e',
  'client-request-id': '2d181a99-aa05-4b42-8218-c312fb32b702',
  'x-ms-gateway-rewrite': 'false',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'ocp-aad-session-key': 'GaGoSXpbFCKenCd9J8y_1boF9oqxDhCRcx9igdjRCrbgs8jaAOUPWFM5wbL8yVjjkybJLMQKn_1lEpAMSPPS2SCiainRYMGdunSWbXGAstw.NjAkzBcnCRDWU2X4C0AM3NZF1_OVADgXXxjEbEJRytA',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0;',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:43 GMT',
  'content-length': '381' });
 return result; },
function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .delete('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleAssignments(guid%2717da6bb9-9a14-4cd7-a1e1-c388362d3026%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:45 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://graph.ppe.windows.net:443')
  .get('/c78c1b8a-fc25-436c-9a5e-e8d89595436a/groups?$filter=displayName%20eq%20%27Helpdesk%20Administrator%27&api-version=1.42-previewInternal')
  .reply(200, "{\"odata.metadata\":\"https://graph.ppe.windows.net/c78c1b8a-fc25-436c-9a5e-e8d89595436a/$metadata#directoryObjects/Microsoft.WindowsAzure.ActiveDirectory.Group\",\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  'ocp-aad-diagnostics-server-name': 'h18CQeQQ6hNksP2st9xsNS1OU3V1ecOI0YBiucSafCY=',
  'request-id': '48a627c9-db2f-4bf7-bc5a-4d6cece25dc2',
  'client-request-id': '48c8b571-710c-413d-828e-f98703437212',
  'x-ms-gateway-rewrite': 'false',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'ocp-aad-session-key': 'rzttJi5u3zbll6eB4Sr6H085HBlpOzYvNgAmbwqdp_o7Xs-4UJFq6gBIdJ01dMyWstf_ovYXoFrV0BOyAjse4cGal8nxYWyfRdF0GeB5vNo.igURI5C7ee33xrvjpdHPe4n36VNEAeEtFl-X57FvM60',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0;',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:44 GMT',
  'content-length': '170' });
 return result; },
function (nock) { 
var result = 
nock('https://graph.ppe.windows.net:443')
  .get('/c78c1b8a-fc25-436c-9a5e-e8d89595436a/roles?api-version=1.42-previewInternal')
  .reply(200, "{\"odata.metadata\":\"https://graph.ppe.windows.net/c78c1b8a-fc25-436c-9a5e-e8d89595436a/$metadata#directoryObjects/Microsoft.WindowsAzure.ActiveDirectory.Role\",\"value\":[{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Role\",\"objectType\":\"Role\",\"objectId\":\"29232cdf-9323-42fd-ade2-1d097af3e4de\",\"softDeletionTimestamp\":null,\"description\":\"Exchange Service Administrator.\",\"displayName\":\"Exchange Service Administrator\",\"isSystem\":true,\"roleDisabled\":false},{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Role\",\"objectType\":\"Role\",\"objectId\":\"4ba39ca4-527c-499a-b93d-d9b492c50246\",\"softDeletionTimestamp\":null,\"description\":\"Allows ability to perform tier1 support tasks.\",\"displayName\":\"Partner Tier1 Support\",\"isSystem\":true,\"roleDisabled\":false},{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Role\",\"objectType\":\"Role\",\"objectId\":\"62e90394-69f5-4237-9190-012177145e10\",\"softDeletionTimestamp\":null,\"description\":\"Company Administrator role has full access to perform any operation in the company scope.\",\"displayName\":\"Company Administrator\",\"isSystem\":true,\"roleDisabled\":false},{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Role\",\"objectType\":\"Role\",\"objectId\":\"729827e3-9c14-49f7-bb1b-9608f156bbb8\",\"softDeletionTimestamp\":null,\"description\":\"Helpdesk Administrator has access to perform common helpdesk related tasks.\",\"displayName\":\"Helpdesk Administrator\",\"isSystem\":true,\"roleDisabled\":false},{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Role\",\"objectType\":\"Role\",\"objectId\":\"75941009-915a-4869-abe7-691bff18279e\",\"softDeletionTimestamp\":null,\"description\":\"Lync Service Administrator.\",\"displayName\":\"Lync Service Administrator\",\"isSystem\":true,\"roleDisabled\":false},{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Role\",\"objectType\":\"Role\",\"objectId\":\"88d8e3e3-8f55-4a1e-953a-9b9898b8876b\",\"softDeletionTimestamp\":null,\"description\":\"Allows access to various read only tasks in the directory. \",\"displayName\":\"Directory Readers\",\"isSystem\":true,\"roleDisabled\":false},{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Role\",\"objectType\":\"Role\",\"objectId\":\"9360feb5-f418-4baa-8175-e2a00bac4301\",\"softDeletionTimestamp\":null,\"description\":\"Allows access read tasks and a subset of write tasks in the directory.\",\"displayName\":\"Directory Writers\",\"isSystem\":true,\"roleDisabled\":false},{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Role\",\"objectType\":\"Role\",\"objectId\":\"b0f54661-2d74-4c50-afa3-1ec803f12efe\",\"softDeletionTimestamp\":null,\"description\":\"Billing Administrator has access to perform common billing related tasks.\",\"displayName\":\"Billing Administrator\",\"isSystem\":true,\"roleDisabled\":false},{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Role\",\"objectType\":\"Role\",\"objectId\":\"b5468a13-3945-4a40-b0b1-5d78c2676bbf\",\"softDeletionTimestamp\":null,\"description\":\"Allows access and management of users mailboxes.\",\"displayName\":\"Mailbox Administrator\",\"isSystem\":true,\"roleDisabled\":false},{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Role\",\"objectType\":\"Role\",\"objectId\":\"e00e864a-17c5-4a4b-9c06-f5b95a8d5bd8\",\"softDeletionTimestamp\":null,\"description\":\"Allows ability to perform tier2 support tasks.\",\"displayName\":\"Partner Tier2 Support\",\"isSystem\":true,\"roleDisabled\":false},{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Role\",\"objectType\":\"Role\",\"objectId\":\"f023fd81-a637-4b56-95fd-791ac0226033\",\"softDeletionTimestamp\":null,\"description\":\"Service Support Administrator has access to perform common support tasks.\",\"displayName\":\"Service Support Administrator\",\"isSystem\":true,\"roleDisabled\":false},{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.Role\",\"objectType\":\"Role\",\"objectId\":\"fe930be7-5e62-47db-91af-98c3a49a38b1\",\"softDeletionTimestamp\":null,\"description\":\"User Account Administrator has access to perform common user management related tasks.\",\"displayName\":\"User Account Administrator\",\"isSystem\":true,\"roleDisabled\":false}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  'ocp-aad-diagnostics-server-name': 'h18CQeQQ6hNksP2st9xsNS1OU3V1ecOI0YBiucSafCY=',
  'request-id': '28e8d657-a4df-4e9e-91a0-e0c34dff8308',
  'client-request-id': 'b95a2129-1765-4818-a8ac-650311368ae0',
  'x-ms-gateway-rewrite': 'false',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'ocp-aad-session-key': 'KPrEJAQTkfdZxv8xegKihKsPbsKYsCqxM-Yvi9SRkC6QBlMyC2Pe7wjaK8U6fivwZeiZb0QSpxyXVMmCmH4KsyzW9prYjaUWEuPHdC4QZKI.DVMO3nqf7evgDkGvcyjSF0aOI9hjoPYpDgmeZixT-1c',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0;',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:44 GMT',
  'content-length': '3935' });
 return result; },
function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .get('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleDefinitions()?')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/$metadata#roleDefinitions\",\"value\":[\r\n    {\r\n      \"roleId\":\"be21d9e2-3caf-4ef2-a7b2-5339196d939b\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"acdd72a7-3385-48ef-bd42-f606fba81ae7\",\"appId\":\"6ead6d32-1d83-4559-bc85-d7b5b2a2f8e8\",\"name\":\"Reader\",\"description\":\"Reader role allowing only read operations\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"b24988ac-6180-42a0-ab88-20f7382dd24c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Operator\",\"description\":\"Operator role allowing reads, updates, and actions\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"*/read\",\"*/update\",\"*/action\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Reader\",\"description\":\"GETs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"GET\"\r\n          ]\r\n        }\r\n      ]\r\n    },{\r\n      \"roleId\":\"43137be5-c198-403e-8b8e-cfcb933bf291\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"name\":\"Writer\",\"description\":\"PUTs / POSTs allowed\",\"scope\":\"/\",\"permissions\":[\r\n        {\r\n          \"actions\":[\r\n            \"POST\",\"PUT\"\r\n          ]\r\n        },{\r\n          \"actions\":[\r\n            \"SomeRandomCondition\"\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  dataserviceversion: '3.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:47 GMT',
  'content-length': '1762' });
 return result; },
function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleAssignments', '*')
  .reply(201, "{\r\n  \"odata.metadata\":\"https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/$metadata#roleAssignments/@Element\",\"roleAssignmentId\":\"916acfd0-2e67-4467-b0f6-4b6cca4f3d35\",\"appId\":\"797f4846-ba00-4fd7-ba43-dac1f8f63013\",\"roleId\":\"be21d9e2-3caf-4ef2-a7b2-5339196d939b\",\"principalId\":\"729827e3-9c14-49f7-bb1b-9608f156bbb8\",\"scope\":\"/subscriptions/358f3860-9dbe-4ace-b0c0-3d4f2d861014/resourcegroups/rg1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleAssignments(guid\'916acfd0-2e67-4467-b0f6-4b6cca4f3d35\')',
  server: 'Microsoft-IIS/8.0',
  dataserviceversion: '3.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:47 GMT',
  'content-length': '427' });
 return result; },
function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .get('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleAssignments()?')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://aad-pas-nova-by1-001.cloudapp.net/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/$metadata#roleAssignments\",\"value\":[\r\n    {\r\n      \"roleAssignmentId\":\"50a75654-acfb-47bd-b98f-4b038a2421e8\",\"appId\":\"797f4846-ba00-4fd7-ba43-dac1f8f63013\",\"roleId\":\"43137be5-c198-403e-8b8e-cfcb933bf291\",\"principalId\":\"d4cabc17-0ae7-4855-8bec-89797db15fb0\",\"scope\":\"ADXTest\"\r\n    },{\r\n      \"roleAssignmentId\":\"54cb6881-0a1c-4ee0-b230-4cf0b8912217\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"12edb772-da3a-4647-bff1-8b66f48c33bb\",\"scope\":\"/sub/123\"\r\n    },{\r\n      \"roleAssignmentId\":\"558b5d41-ca73-424a-ac84-8c34f587382e\",\"appId\":\"d8970c90-99db-4e64-ac25-9442815172e3\",\"roleId\":\"13affad2-ed47-46ae-98e9-aa40d3f55954\",\"principalId\":\"299b096d-6aef-4d34-bd66-efb5a2cf24e0\",\"scope\":\"UTTestScope\"\r\n    },{\r\n      \"roleAssignmentId\":\"56a0c88a-85ad-47e2-af35-b4d9e1503ecc\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"12edb772-da3a-4647-bff1-8b66f48c33bb\",\"scope\":\"/sub/123/resourcegroups/mygroup\"\r\n    },{\r\n      \"roleAssignmentId\":\"57f2e446-6118-4cbb-a04b-40c28727aad2\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"b6c365fc-3832-4dc8-b91e-24648bdb49b2\",\"scope\":\"/sub/123\"\r\n    },{\r\n      \"roleAssignmentId\":\"916acfd0-2e67-4467-b0f6-4b6cca4f3d35\",\"appId\":\"797f4846-ba00-4fd7-ba43-dac1f8f63013\",\"roleId\":\"be21d9e2-3caf-4ef2-a7b2-5339196d939b\",\"principalId\":\"729827e3-9c14-49f7-bb1b-9608f156bbb8\",\"scope\":\"/subscriptions/358f3860-9dbe-4ace-b0c0-3d4f2d861014/resourcegroups/rg1\"\r\n    },{\r\n      \"roleAssignmentId\":\"935c7e85-c42d-4097-892c-9b76b970577f\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"f46d4f6f-8a39-49a9-b34d-ca54add0a2ae\",\"scope\":\"/sub/123\"\r\n    },{\r\n      \"roleAssignmentId\":\"9e5720d4-0727-4108-9edb-96190ab2845b\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"43137be5-c198-403e-8b8e-cfcb933bf291\",\"principalId\":\"12edb772-da3a-4647-bff1-8b66f48c33bb\",\"scope\":\"/sub/456\"\r\n    },{\r\n      \"roleAssignmentId\":\"b22b7c3e-b452-4b97-90aa-06087caf047b\",\"appId\":\"80941f63-e69b-4695-ba71-3f8028ca1e5f\",\"roleId\":\"7af85c43-6fb7-49f9-9ff6-f9ff20d7205c\",\"principalId\":\"59875459-47b4-4ebd-971f-f16e588979d2\",\"scope\":\"/sub/123\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; odata=minimalmetadata; streaming=true; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  dataserviceversion: '3.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:47 GMT',
  'content-length': '2407' });
 return result; },
function (nock) { 
var result = 
nock('https://graph.ppe.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('//c78c1b8a-fc25-436c-9a5e-e8d89595436a/getObjectsByObjectIds?api-version=1.42-previewInternal', '*')
  .reply(200, "{\"odata.metadata\":\"https://graph.ppe.windows.net/c78c1b8a-fc25-436c-9a5e-e8d89595436a/$metadata#directoryObjects\",\"value\":[{\"odata.type\":\"Microsoft.WindowsAzure.ActiveDirectory.StubDirectoryObject\",\"objectType\":\"User\",\"objectId\":\"d4cabc17-0ae7-4855-8bec-89797db15fb0\",\"softDeletionTimestamp\":null,\"displayName\":\"Jon Doe\",\"mail\":null,\"userPrincipalName\":\"admin@aad240.ccsctp.net\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  'ocp-aad-diagnostics-server-name': 'h18CQeQQ6hNksP2st9xsNS1OU3V1ecOI0YBiucSafCY=',
  'request-id': '08c0e6be-4f60-48e9-b532-e2d782207c36',
  'client-request-id': 'ca10bff3-d09a-4143-8c49-e7aef1f2d664',
  'x-ms-gateway-rewrite': 'false',
  'x-ms-dirapi-data-contract-version': '1.42-previewInternal',
  'ocp-aad-session-key': 'POywLVIce4ZVHJ6wT9j-Ng3y2xTl0rK9TnsQxvSYwJ5Hy-BFXfPbUIRkgjuAXaNKoN0IfUP-zUTlHHN11bNf0314EsPWjxbfW21u1Cmfxa0.K356URp9CZbbeQGjYOJnypz4OJOMhrXHGjpkZ9zYfJU',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0;',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:45 GMT',
  'content-length': '381' });
 return result; },
function (nock) { 
var result = 
nock('https://aad-pas-nova-by1-001.cloudapp.net:443')
  .delete('/1EEEB395-21C8-4AE0-B145-2ABD2DFE501D/roleAssignments(guid%27916acfd0-2e67-4467-b0f6-4b6cca4f3d35%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 12 Jun 2014 16:30:47 GMT' });
 return result; }]];