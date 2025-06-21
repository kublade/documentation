[Skip to main content](#__docusaurus_skipToContent_fallback)

[![Kublade Logo](/img/logo-full.svg)![Kublade Logo](/img/logo-full.svg)](/index.md)

[Why Kublade?](/why-kublade.md)[Documentation](/docs/intro.md)[API](/api.md)[Enterprise Support](/enterprise-support.md)

[GitHub](https://github.com/kublade/kublade)[Gitter](https://matrix.to/#/#kublade:gitter.im)

Search...

* Activities

  * getList activities
  * getGet an activity

* Authentication

  * postRegister a new user
  * postLogin a user
  * getGet the authenticated user
  * postLogout a user
  * postRefresh a token

* Clusters

  * getList clusters
  * postAdd a new cluster
  * getGet a cluster
  * delDelete a cluster
  * patchUpdate a cluster

* Deployments

  * getList deployments for a project
  * postAdd a new deployment
  * getGet a deployment by ID
  * delDelete a deployment
  * patchUpdate a deployment
  * putCreate a network policy
  * delDelete a network policy
  * patchRevert a commit
  * patchApprove a deployment

* Projects

  * getList projects
  * postAdd a new project
  * getGet a project
  * delDelete a project
  * patchUpdate a project

* Roles

  * getList roles
  * postAdd a new role
  * getGet a role
  * delDelete a role
  * patchUpdate a role

* Templates

  * getList templates
  * postAdd a new template
  * getGet template
  * delDelete the template
  * patchUpdate the template
  * postImport a new template
  * postSync a template
  * getList the folders
  * postAdd a new folder
  * getGet the folder
  * delDelete the folder
  * patchUpdate the folder
  * getList the files
  * postAdd a new file
  * getGet the file
  * delDelete the file
  * patchUpdate the file
  * getList the fields
  * postAdd a new field
  * getGet the field
  * delDelete the field
  * patchUpdate the field
  * getList the options
  * postAdd a new option
  * getGet the option
  * delDelete the option
  * patchUpdate the option
  * getList the ports
  * postAdd a new port
  * getGet the port
  * delDelete the port
  * patchUpdate the port

* Users

  * getList users
  * postAdd a new user
  * getGet a user
  * delDelete a user
  * patchUpdate a user
  * postGenerate a magic link for the user

[API docs by Redocly](https://redocly.com/redoc/)

# Kublade API Documentation<!-- --> (<!-- -->v2.11.2<!-- -->)

Download OpenAPI specification<!-- -->:[Download](https://documents.kublade.org/api-docs-latest.json)

E-mail

<!-- -->

:

<!-- -->

<hi@kublade.org>

<!-- -->

License:

<!-- -->

[Apache-2.0](https://kublade.org/docs/license/)

Kublade Swagger API documentation

## [](#tag/Activities)Activities

Endpoints for activity management

## [](#tag/Activities/operation/3b78901ee200dfb78bedd0e884122b6d)List activities<!-- -->

List the activities.

##### query<!-- --> Parameters

|        |                             |
| ------ | --------------------------- |
| cursor | stringCursor for pagination |

### Responses

**200<!-- -->**

Activities retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/activities

https\://documents.kublade.org/api/activities

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Roles retrieved successfully",
"data": {
"activities": [
{
"id": "string",
"log_name": "string",
"causer_id": "string",
"causer_type": "string",
"event": "string",
"subject_type": "string",
"subject_id": "string",
"properties": { },
"created_at": "2019-08-24T14:15:22Z",
"updated_at": "2019-08-24T14:15:22Z",
"deleted_at": "2019-08-24T14:15:22Z"
}
],
"links": {
"next": "string",
"prev": "string"
}
}
}`

## [](#tag/Activities/operation/24cf1a07d153ebd7a0b11124d6484ba2)Get an activity<!-- -->

Get the role.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| activity\_idrequired | stringThe ID of the activity |

### Responses

**200<!-- -->**

Activity retrieved successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

get/api/activities/{activity\_id}

https\://documents.kublade.org/api/activities/{activity\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Activity retrieved successfully",
"data": {
"activity": {
"id": "string",
"log_name": "string",
"causer_id": "string",
"causer_type": "string",
"event": "string",
"subject_type": "string",
"subject_id": "string",
"properties": { },
"created_at": "2019-08-24T14:15:22Z",
"updated_at": "2019-08-24T14:15:22Z",
"deleted_at": "2019-08-24T14:15:22Z"
}
}
}`

## [](#tag/Authentication)Authentication

Endpoints for user authentication

## [](#tag/Authentication/operation/eb3623f9bcd09a1dacbefaac07aed1bb)Register a new user<!-- -->

Register a new user.

##### Request Body schema: application/json

|          |        |
| -------- | ------ |
| name     | string |
| email    | string |
| password | string |

### Responses

**201<!-- -->**

User registered successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/auth/register

https\://documents.kublade.org/api/auth/register

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"name": "John Doe",
"email": "john@example.com",
"password": "password123"
}`

### <!-- -->Response samples<!-- -->

* 201
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "User registered successfully",
"data": {
"user": {
"id": "1",
"name": "John Doe",
"email": "john.doe@example.com",
"email_verified_at": "2021-01-01T00:00:00Z",
"password": "password123",
"remember_token": "remember_token123",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00"
},
"token": "string"
}
}`

## [](#tag/Authentication/operation/f77777235d676b651c9465807d8f9485)Login a user<!-- -->

Login a user.

##### Request Body schema: application/json

|          |        |
| -------- | ------ |
| email    | string |
| password | string |

### Responses

**200<!-- -->**

Login successful

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/auth/login

https\://documents.kublade.org/api/auth/login

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"email": "john@example.com",
"password": "password123"
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Login successful",
"data": {
"token": "string"
}
}`

## [](#tag/Authentication/operation/57247eca7a7733a6b79ce17999f79422)Get the authenticated user<!-- -->

Get the authenticated user.

### Responses

**200<!-- -->**

User authenticated

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/auth/me

https\://documents.kublade.org/api/auth/me

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "User authenticated",
"data": {
"id": "1",
"name": "John Doe",
"email": "john.doe@example.com",
"email_verified_at": "2021-01-01T00:00:00Z",
"password": "password123",
"remember_token": "remember_token123",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00"
}
}`

## [](#tag/Authentication/operation/c4b3c6f1776909e546a421283c044ac3)Logout a user<!-- -->

Logout a user.

### Responses

**200<!-- -->**

Successfully logged out

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/auth/logout

https\://documents.kublade.org/api/auth/logout

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

`{
"status": "success",
"message": "Successfully logged out"
}`

## [](#tag/Authentication/operation/a11d4212c7e49cbf5852d9bb2e3d5054)Refresh a token<!-- -->

Refresh a token.

### Responses

**200<!-- -->**

Token refreshed

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/auth/refresh

https\://documents.kublade.org/api/auth/refresh

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Token refreshed",
"data": {
"token": "string"
}
}`

## [](#tag/Clusters)Clusters

Endpoints for cluster management

## [](#tag/Clusters/operation/74ebb768ba3492a195fac57a91424ef5)List clusters<!-- -->

List clusters.

##### path<!-- --> Parameters

|                     |                             |
| ------------------- | --------------------------- |
| project\_idrequired | stringThe ID of the project |

##### query<!-- --> Parameters

|        |                             |
| ------ | --------------------------- |
| cursor | stringCursor for pagination |

### Responses

**200<!-- -->**

Clusters retrieved successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/projects/{project\_id}/clusters

https\://documents.kublade.org/api/projects/{project\_id}/clusters

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Clusters retrieved successfully",
"data": {
"clusters": [
{
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "123e4567-e89b-12d3-a456-426614174000",
"project_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Cluster 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
],
"links": {
"next": "string",
"prev": "string"
}
}
}`

## [](#tag/Clusters/operation/ef5f4f48b081fdee8b704e6a3b9269f3)Add a new cluster<!-- -->

Add a new cluster.

##### path<!-- --> Parameters

|                     |                             |
| ------------------- | --------------------------- |
| project\_idrequired | stringThe ID of the project |

##### Request Body schema: application/jsonrequired

|           |        |
| --------- | ------ |
| name      | string |
| git       | object |
| k8s       | object |
| namespace | object |

### Responses

**201<!-- -->**

Cluster created successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/projects/{project\_id}/clusters

https\://documents.kublade.org/api/projects/{project\_id}/clusters

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

Expand all  Collapse all

`{
"name": "string",
"git": {
"url": "string",
"branch": "string",
"credentials": "string",
"username": "string",
"email": "string",
"base_path": "string"
},
"k8s": {
"api_url": "string",
"kubeconfig": "string",
"service_account_token": "string",
"node_prefix": "string"
},
"namespace": {
"utility": "string",
"ingress": "string"
}
}`

### <!-- -->Response samples<!-- -->

* 201
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Cluster created successfully",
"data": {
"cluster": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "123e4567-e89b-12d3-a456-426614174000",
"project_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Cluster 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Clusters/operation/90a6bba9329e8f0267e30fc3313e0b3b)Get a cluster<!-- -->

Get a cluster.

##### path<!-- --> Parameters

|                     |                             |
| ------------------- | --------------------------- |
| project\_idrequired | stringThe ID of the project |
| cluster\_idrequired | stringThe ID of the cluster |

### Responses

**200<!-- -->**

Cluster retrieved successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

get/api/projects/{project\_id}/clusters/{cluster\_id}

https\://documents.kublade.org/api/projects/{project\_id}/clusters/{cluster\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Cluster retrieved successfully",
"data": {
"cluster": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "123e4567-e89b-12d3-a456-426614174000",
"project_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Cluster 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Clusters/operation/6bdfcee765ad030ebd18646cdeea793f)Delete a cluster<!-- -->

Delete the cluster.

##### path<!-- --> Parameters

|                     |                             |
| ------------------- | --------------------------- |
| project\_idrequired | stringThe ID of the project |
| cluster\_idrequired | stringThe ID of the cluster |

### Responses

**200<!-- -->**

Cluster deleted successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

delete/api/projects/{project\_id}/clusters/{cluster\_id}

https\://documents.kublade.org/api/projects/{project\_id}/clusters/{cluster\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Cluster deleted successfully",
"data": {
"cluster": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "123e4567-e89b-12d3-a456-426614174000",
"project_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Cluster 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Clusters/operation/72525a93b7b7af5e50f1a109d209a47b)Update a cluster<!-- -->

Update the cluster.

##### path<!-- --> Parameters

|                     |                             |
| ------------------- | --------------------------- |
| project\_idrequired | stringThe ID of the project |
| cluster\_idrequired | stringThe ID of the cluster |

##### Request Body schema: application/jsonrequired

|           |        |
| --------- | ------ |
| name      | string |
| git       | object |
| k8s       | object |
| namespace | object |

### Responses

**200<!-- -->**

Cluster updated successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

patch/api/projects/{project\_id}/clusters/{cluster\_id}

https\://documents.kublade.org/api/projects/{project\_id}/clusters/{cluster\_id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

Expand all  Collapse all

`{
"name": "string",
"git": {
"url": "string",
"branch": "string",
"credentials": "string",
"username": "string",
"email": "string",
"base_path": "string"
},
"k8s": {
"api_url": "string",
"kubeconfig": "string",
"service_account_token": "string",
"node_prefix": "string"
},
"namespace": {
"utility": "string",
"ingress": "string"
}
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Cluster updated successfully",
"data": {
"cluster": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "123e4567-e89b-12d3-a456-426614174000",
"project_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Cluster 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Deployments)Deployments

Endpoints for deployment management

## [](#tag/Deployments/operation/18b25c37c6c77675b1e49f103ac628eb)List deployments for a project<!-- -->

List the deployments.

##### path<!-- --> Parameters

|                     |                             |
| ------------------- | --------------------------- |
| project\_idrequired | stringThe ID of the project |

##### query<!-- --> Parameters

|        |                             |
| ------ | --------------------------- |
| cursor | stringCursor for pagination |

### Responses

**200<!-- -->**

Deployments retrieved successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/projects/{project\_id}/deployments

https\://documents.kublade.org/projects/{project\_id}/deployments

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Deployments retrieved successfully",
"data": {
"deployments": [
{
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "123e4567-e89b-12d3-a456-426614174000",
"project_id": "123e4567-e89b-12d3-a456-426614174000",
"namespace_id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"cluster_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Deployment 1",
"uuid": "123e4567-e89b-12d3-a456-426614174000",
"paused": false,
"update": false,
"delete": false,
"deployed_at": "2021-01-01 00:00:00",
"deployment_updated_at": "2021-01-01 00:00:00",
"creation_dispatched_at": "2021-01-01 00:00:00",
"update_dispatched_at": "2021-01-01 00:00:00",
"deletion_dispatched_at": "2021-01-01 00:00:00",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
],
"links": {
"next": "string",
"prev": "string"
}
}
}`

## [](#tag/Deployments/operation/8d75602a975912488f1a61b64fe13a30)Add a new deployment<!-- -->

Add the deployment.

##### path<!-- --> Parameters

|                     |                             |
| ------------------- | --------------------------- |
| project\_idrequired | stringThe ID of the project |

##### Request Body schema: application/jsonrequired

|              |        |
| ------------ | ------ |
| template\_id | string |
| cluster\_id  | string |
| name         | string |
| data         | object |

### Responses

**200<!-- -->**

Deployment created

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/projects/{project\_id}/deployments

https\://documents.kublade.org/projects/{project\_id}/deployments

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

Expand all  Collapse all

`{
"template_id": "string",
"cluster_id": "string",
"name": "string",
"data": { }
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Deployment created",
"data": {
"deployment": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "123e4567-e89b-12d3-a456-426614174000",
"project_id": "123e4567-e89b-12d3-a456-426614174000",
"namespace_id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"cluster_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Deployment 1",
"uuid": "123e4567-e89b-12d3-a456-426614174000",
"paused": false,
"update": false,
"delete": false,
"deployed_at": "2021-01-01 00:00:00",
"deployment_updated_at": "2021-01-01 00:00:00",
"creation_dispatched_at": "2021-01-01 00:00:00",
"update_dispatched_at": "2021-01-01 00:00:00",
"deletion_dispatched_at": "2021-01-01 00:00:00",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Deployments/operation/72252f33a26a435506370b7218eebec4)Get a deployment by ID<!-- -->

Get the deployment.

##### path<!-- --> Parameters

|                        |                                |
| ---------------------- | ------------------------------ |
| project\_idrequired    | stringThe ID of the project    |
| deployment\_idrequired | stringThe ID of the deployment |

### Responses

**200<!-- -->**

Deployment details

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

get/projects/{project\_id}/deployments/{deployment\_id}

https\://documents.kublade.org/projects/{project\_id}/deployments/{deployment\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Deployment details",
"data": {
"deployment": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "123e4567-e89b-12d3-a456-426614174000",
"project_id": "123e4567-e89b-12d3-a456-426614174000",
"namespace_id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"cluster_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Deployment 1",
"uuid": "123e4567-e89b-12d3-a456-426614174000",
"paused": false,
"update": false,
"delete": false,
"deployed_at": "2021-01-01 00:00:00",
"deployment_updated_at": "2021-01-01 00:00:00",
"creation_dispatched_at": "2021-01-01 00:00:00",
"update_dispatched_at": "2021-01-01 00:00:00",
"deletion_dispatched_at": "2021-01-01 00:00:00",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Deployments/operation/a779e5d880a00ad802a162515bf432d9)Delete a deployment<!-- -->

Delete the deployment.

##### path<!-- --> Parameters

|                        |                                |
| ---------------------- | ------------------------------ |
| project\_idrequired    | stringThe ID of the project    |
| deployment\_idrequired | stringThe ID of the deployment |

### Responses

**200<!-- -->**

Deployment deleted

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

delete/projects/{project\_id}/deployments/{deployment\_id}

https\://documents.kublade.org/projects/{project\_id}/deployments/{deployment\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Deployment deleted",
"data": {
"deployment": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "123e4567-e89b-12d3-a456-426614174000",
"project_id": "123e4567-e89b-12d3-a456-426614174000",
"namespace_id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"cluster_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Deployment 1",
"uuid": "123e4567-e89b-12d3-a456-426614174000",
"paused": false,
"update": false,
"delete": false,
"deployed_at": "2021-01-01 00:00:00",
"deployment_updated_at": "2021-01-01 00:00:00",
"creation_dispatched_at": "2021-01-01 00:00:00",
"update_dispatched_at": "2021-01-01 00:00:00",
"deletion_dispatched_at": "2021-01-01 00:00:00",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Deployments/operation/4e29f735767422bac66ea7b5d69e1958)Update a deployment<!-- -->

Update the deployment.

##### path<!-- --> Parameters

|                        |                                |
| ---------------------- | ------------------------------ |
| project\_idrequired    | stringThe ID of the project    |
| deployment\_idrequired | stringThe ID of the deployment |

##### Request Body schema: application/jsonrequired

|      |        |
| ---- | ------ |
| name | string |
| data | object |

### Responses

**200<!-- -->**

Deployment updated

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

patch/projects/{project\_id}/deployments/{deployment\_id}

https\://documents.kublade.org/projects/{project\_id}/deployments/{deployment\_id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

Expand all  Collapse all

`{
"name": "string",
"data": { }
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Deployment updated",
"data": {
"deployment": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "123e4567-e89b-12d3-a456-426614174000",
"project_id": "123e4567-e89b-12d3-a456-426614174000",
"namespace_id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"cluster_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Deployment 1",
"uuid": "123e4567-e89b-12d3-a456-426614174000",
"paused": false,
"update": false,
"delete": false,
"deployed_at": "2021-01-01 00:00:00",
"deployment_updated_at": "2021-01-01 00:00:00",
"creation_dispatched_at": "2021-01-01 00:00:00",
"update_dispatched_at": "2021-01-01 00:00:00",
"deletion_dispatched_at": "2021-01-01 00:00:00",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Deployments/operation/73a2f6746726ced5de99d99571c2d4a5)Create a network policy<!-- -->

Create the network policy.

##### path<!-- --> Parameters

|                             |                                    |
| --------------------------- | ---------------------------------- |
| project\_idrequired         | stringThe ID of the project        |
| deployment\_idrequired      | stringThe ID of the deployment     |
| network\_policy\_idrequired | stringThe ID of the network policy |

##### Request Body schema: application/jsonrequired

|                        |        |
| ---------------------- | ------ |
| source\_deployment\_id | string |
| target\_deployment\_id | string |

### Responses

**200<!-- -->**

Network policy created

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

put/projects/{project\_id}/deployments/{deployment\_id}/network-policy

https\://documents.kublade.org/projects/{project\_id}/deployments/{deployment\_id}/network-policy

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"source_deployment_id": "string",
"target_deployment_id": "string"
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Network policy put",
"data": {
"network_policy": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"source_deployment_id": "123e4567-e89b-12d3-a456-426614174000",
"target_deployment_id": "123e4567-e89b-12d3-a456-426614174000",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Deployments/operation/dc963098564508c999bdb2089027b494)Delete a network policy<!-- -->

Delete the network policy.

##### path<!-- --> Parameters

|                             |                                    |
| --------------------------- | ---------------------------------- |
| project\_idrequired         | stringThe ID of the project        |
| deployment\_idrequired      | stringThe ID of the deployment     |
| network\_policy\_idrequired | stringThe ID of the network policy |

### Responses

**200<!-- -->**

Network policy deleted

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

delete/projects/{project\_id}/deployments/{deployment\_id}/network-policy/{network\_policy\_id}

https\://documents.kublade.org/projects/{project\_id}/deployments/{deployment\_id}/network-policy/{network\_policy\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Network policy deleted",
"data": {
"network_policy": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"source_deployment_id": "123e4567-e89b-12d3-a456-426614174000",
"target_deployment_id": "123e4567-e89b-12d3-a456-426614174000",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Deployments/operation/57d6978666c2af90d72ea433bdf01a79)Revert a commit<!-- -->

Revert the commit.

##### path<!-- --> Parameters

|                        |                                |
| ---------------------- | ------------------------------ |
| project\_idrequired    | stringThe ID of the project    |
| deployment\_idrequired | stringThe ID of the deployment |
| commit\_idrequired     | stringThe ID of the commit     |

### Responses

**200<!-- -->**

Commit reverted

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

patch/projects/{project\_id}/deployments/{deployment\_id}/commit/{commit\_id}

https\://documents.kublade.org/projects/{project\_id}/deployments/{deployment\_id}/commit/{commit\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Commit reverted",
"data": {
"commit": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"deployment_id": "123e4567-e89b-12d3-a456-426614174000",
"hash": "123e4567-e89b-12d3-a456-426614174000",
"message": "Deployment commit message",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Deployments/operation/9543416cbd283788e4c0f40baa3e251e)Approve a deployment<!-- -->

Approve the deployment.

##### path<!-- --> Parameters

|                        |                                |
| ---------------------- | ------------------------------ |
| project\_idrequired    | stringThe ID of the project    |
| deployment\_idrequired | stringThe ID of the deployment |

### Responses

**200<!-- -->**

Deployment approved

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

patch/projects/{project\_id}/deployments/{deployment\_id}/approve

https\://documents.kublade.org/projects/{project\_id}/deployments/{deployment\_id}/approve

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Deployment approved",
"data": {
"deployment": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "123e4567-e89b-12d3-a456-426614174000",
"project_id": "123e4567-e89b-12d3-a456-426614174000",
"namespace_id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"cluster_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Deployment 1",
"uuid": "123e4567-e89b-12d3-a456-426614174000",
"paused": false,
"update": false,
"delete": false,
"deployed_at": "2021-01-01 00:00:00",
"deployment_updated_at": "2021-01-01 00:00:00",
"creation_dispatched_at": "2021-01-01 00:00:00",
"update_dispatched_at": "2021-01-01 00:00:00",
"deletion_dispatched_at": "2021-01-01 00:00:00",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Projects)Projects

Endpoints for project management

## [](#tag/Projects/operation/823e98abb0b524dd7cbd363e79bbdaee)List projects<!-- -->

List the projects.

##### query<!-- --> Parameters

|        |                             |
| ------ | --------------------------- |
| cursor | stringCursor for pagination |

### Responses

**200<!-- -->**

Projects retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/projects

https\://documents.kublade.org/api/projects

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Projects retrieved successfully",
"data": {
"projects": [
{
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "1",
"name": "Project 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
],
"links": {
"next": "string",
"prev": "string"
}
}
}`

## [](#tag/Projects/operation/ff62eb032e20c46edc03cd53fcef1ef8)Add a new project<!-- -->

Add a new project.

##### Request Body schema: application/jsonrequired

|      |        |
| ---- | ------ |
| name | string |

### Responses

**201<!-- -->**

Project added successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/projects

https\://documents.kublade.org/api/projects

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"name": "string"
}`

### <!-- -->Response samples<!-- -->

* 201
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Project added successfully",
"data": {
"project": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "1",
"name": "Project 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Projects/operation/08f6fb22514dc86195c68b91fb4d439c)Get a project<!-- -->

Get the project.

##### path<!-- --> Parameters

|                     |                             |
| ------------------- | --------------------------- |
| project\_idrequired | stringThe ID of the project |

### Responses

**200<!-- -->**

Project retrieved successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

get/api/projects/{project\_id}

https\://documents.kublade.org/api/projects/{project\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Project retrieved successfully",
"data": {
"project": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "1",
"name": "Project 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Projects/operation/1ff9dc15babdc2e879a54b1871810ff6)Delete a project<!-- -->

Delete the project.

##### path<!-- --> Parameters

|                     |                             |
| ------------------- | --------------------------- |
| project\_idrequired | stringThe ID of the project |

### Responses

**200<!-- -->**

Project deleted successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

delete/api/projects/{project\_id}

https\://documents.kublade.org/api/projects/{project\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Project deleted successfully",
"data": {
"project": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "1",
"name": "Project 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Projects/operation/d81b92b57b2e034500d232bf749aa936)Update a project<!-- -->

Update the project.

##### path<!-- --> Parameters

|                     |                             |
| ------------------- | --------------------------- |
| project\_idrequired | stringThe ID of the project |

##### Request Body schema: application/jsonrequired

|      |        |
| ---- | ------ |
| name | string |

### Responses

**200<!-- -->**

Project updated successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

patch/api/projects/{project\_id}

https\://documents.kublade.org/api/projects/{project\_id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"name": "string"
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Project updated successfully",
"data": {
"project": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "1",
"name": "Project 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Roles)Roles

Endpoints for role management

## [](#tag/Roles/operation/902249e5371aec2f75d9c5dacf3438f5)List roles<!-- -->

List the roles.

##### query<!-- --> Parameters

|        |                             |
| ------ | --------------------------- |
| cursor | stringCursor for pagination |

### Responses

**200<!-- -->**

Roles retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/roles

https\://documents.kublade.org/api/roles

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Roles retrieved successfully",
"data": {
"roles": [
{
"id": "1",
"name": "John Doe",
"guard_name": "api",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00"
}
],
"links": {
"next": "string",
"prev": "string"
}
}
}`

## [](#tag/Roles/operation/2062888ba839d7b212d695b98a287fef)Add a new role<!-- -->

Add a new role.

##### Request Body schema: application/jsonrequired

|             |                          |
| ----------- | ------------------------ |
| name        | string                   |
| permissions | Array of strings or null |

### Responses

**200<!-- -->**

Role created successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/roles

https\://documents.kublade.org/api/roles

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

Expand all  Collapse all

`{
"name": "string",
"permissions": [
"string"
]
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Role created successfully",
"data": {
"role": {
"id": "1",
"name": "John Doe",
"guard_name": "api",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Roles/operation/72799b70fb8263dfed56b1d747fe0ebc)Get a role<!-- -->

Get the role.

##### path<!-- --> Parameters

|                  |                           |
| ---------------- | ------------------------- |
| role\_idrequired | integerThe ID of the role |

### Responses

**200<!-- -->**

Role retrieved successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

get/api/roles/{role\_id}

https\://documents.kublade.org/api/roles/{role\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Role retrieved successfully",
"data": {
"role": {
"id": "1",
"name": "John Doe",
"guard_name": "api",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Roles/operation/74a0fdc6391d1c4615875d590f301e39)Delete a role<!-- -->

Delete the role.

##### path<!-- --> Parameters

|                  |                           |
| ---------------- | ------------------------- |
| role\_idrequired | integerThe ID of the role |

### Responses

**200<!-- -->**

Role deleted successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

delete/api/roles/{role\_id}

https\://documents.kublade.org/api/roles/{role\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Role deleted successfully",
"data": {
"role": {
"id": "1",
"name": "John Doe",
"guard_name": "api",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Roles/operation/15642e488a8b1c0285a1499eafeb45de)Update a role<!-- -->

Update the role.

##### path<!-- --> Parameters

|                  |                           |
| ---------------- | ------------------------- |
| role\_idrequired | integerThe ID of the role |

##### Request Body schema: application/jsonrequired

|             |                          |
| ----------- | ------------------------ |
| name        | string                   |
| permissions | Array of strings or null |

### Responses

**200<!-- -->**

Role updated successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

patch/api/roles/{role\_id}

https\://documents.kublade.org/api/roles/{role\_id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

Expand all  Collapse all

`{
"name": "string",
"permissions": [
"string"
]
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Role updated successfully",
"data": {
"role": {
"id": "1",
"name": "John Doe",
"guard_name": "api",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates)Templates

Endpoints for template management

## [](#tag/Templates/operation/eeca86af267288f9b1c427d7e03a2d9d)List templates<!-- -->

List the templates.

##### query<!-- --> Parameters

|        |                             |
| ------ | --------------------------- |
| cursor | stringCursor for pagination |

### Responses

**200<!-- -->**

Templates retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/templates

https\://documents.kublade.org/api/templates

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Templates retrieved successfully",
"data": {
"templates": [
{
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "1",
"name": "Template 1",
"netpol": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
],
"links": {
"next": "string",
"prev": "string"
}
}
}`

## [](#tag/Templates/operation/43320bd6f44efaf6b50b5ca6519302d7)Add a new template<!-- -->

Add a new template.

##### Request Body schema: application/jsonrequired

|        |                 |
| ------ | --------------- |
| name   | string          |
| netpol | boolean or null |

### Responses

**200<!-- -->**

Template added successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/templates

https\://documents.kublade.org/api/templates

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"name": "string",
"netpol": true
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Template added successfully",
"data": {
"template": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "1",
"name": "Template 1",
"netpol": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/f5e23ce8795fcff8a9ce9996f6ff9059)Get template<!-- -->

Get the template.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |

### Responses

**200<!-- -->**

Template retrieved successfully

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

get/api/templates/{template\_id}

https\://documents.kublade.org/api/templates/{template\_id}

### <!-- -->Response samples<!-- -->

* 200
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Template retrieved successfully",
"data": {
"template": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "1",
"name": "Template 1",
"netpol": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/7707d714fc1267e703e62a8ab3956d7f)Delete the template<!-- -->

Delete the template.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |

### Responses

**200<!-- -->**

Template deleted successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

delete/api/templates/{template\_id}

https\://documents.kublade.org/api/templates/{template\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Template deleted successfully",
"data": {
"template": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "1",
"name": "Template 1",
"netpol": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/94d83def3729f1c3b90eaae98f22fba7)Update the template<!-- -->

Update the template.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |

##### Request Body schema: application/jsonrequired

|        |                 |
| ------ | --------------- |
| name   | string          |
| netpol | boolean or null |
| git    | object or null  |

### Responses

**200<!-- -->**

Template updated successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

patch/api/templates/{template\_id}

https\://documents.kublade.org/api/templates/{template\_id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

Expand all  Collapse all

`{
"name": "string",
"netpol": true,
"git": {
"url": "string",
"branch": "string",
"credentials": "string",
"username": "string",
"email": "string",
"base_path": "string"
}
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Template updated successfully",
"data": {
"template": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "1",
"name": "Template 1",
"netpol": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/55b9555076ac1054306f38f8f61de56f)Import a new template<!-- -->

Import a new template.

##### Request Body schema: application/jsonrequired

|           |                 |
| --------- | --------------- |
| name      | string          |
| netpol    | boolean or null |
| url       | string          |
| chart     | string          |
| repo      | string or null  |
| namespace | string or null  |

### Responses

**200<!-- -->**

Template imported successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/templates/import

https\://documents.kublade.org/api/templates/import

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"name": "string",
"netpol": true,
"url": "string",
"chart": "string",
"repo": "string",
"namespace": "string"
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Template imported successfully",
"data": {
"template": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "1",
"name": "Template 1",
"netpol": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/aacbdddd84fa708c2a80c7a734c8f27a)Sync a template<!-- -->

Sync a template.

##### Request Body schema: application/jsonrequired

|        |                 |
| ------ | --------------- |
| name   | string          |
| netpol | boolean or null |
| git    | object          |

### Responses

**200<!-- -->**

Template syncing

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/templates/sync

https\://documents.kublade.org/api/templates/sync

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

Expand all  Collapse all

`{
"name": "string",
"netpol": true,
"git": {
"url": "string",
"branch": "string",
"credentials": "string",
"username": "string",
"email": "string",
"base_path": "string"
}
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Template syncing",
"data": {
"template": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"user_id": "1",
"name": "Template 1",
"netpol": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/84f1a9370af93c70674fbf64ad6d16fd)List the folders<!-- -->

List the folders.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |

##### query<!-- --> Parameters

|        |                             |
| ------ | --------------------------- |
| cursor | stringCursor for pagination |

### Responses

**200<!-- -->**

Folders retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/templates/{template\_id}/folders

https\://documents.kublade.org/api/templates/{template\_id}/folders

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Folders retrieved successfully",
"data": {
"folders": [
{
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"parent_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Directory 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
],
"links": {
"next": "string",
"prev": "string"
}
}
}`

## [](#tag/Templates/operation/2ff8d8091c5f4383aea0e97c1b019256)Add a new folder<!-- -->

Add a new folder.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |

##### Request Body schema: application/jsonrequired

|            |                |
| ---------- | -------------- |
| name       | string         |
| parent\_id | string or null |

### Responses

**200<!-- -->**

Folder added successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/templates/{template\_id}/folders

https\://documents.kublade.org/api/templates/{template\_id}/folders

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"name": "string",
"parent_id": "string"
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Folder added successfully",
"data": {
"folder": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"parent_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Directory 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/9e3447f3cc21aad853af17a22713cfe6)Get the folder<!-- -->

Get the folder.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| folder\_idrequired   | stringThe ID of the folder   |

### Responses

**200<!-- -->**

Folder retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/templates/{template\_id}/folders/{folder\_id}

https\://documents.kublade.org/api/templates/{template\_id}/folders/{folder\_id}

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Folder retrieved successfully",
"data": {
"folder": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"parent_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Directory 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/6dfa61f78824eac51366997cba2cad92)Delete the folder<!-- -->

Delete the folder.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| folder\_idrequired   | stringThe ID of the folder   |

### Responses

**200<!-- -->**

Folder deleted successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

delete/api/templates/{template\_id}/folders/{folder\_id}

https\://documents.kublade.org/api/templates/{template\_id}/folders/{folder\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Folder deleted successfully",
"data": {
"folder": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"parent_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Directory 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/d6a22cfc8ca2365373ad4297f192bc64)Update the folder<!-- -->

Update the folder.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| folder\_idrequired   | stringThe ID of the folder   |

##### Request Body schema: application/jsonrequired

|            |                |
| ---------- | -------------- |
| name       | string         |
| parent\_id | string or null |

### Responses

**200<!-- -->**

Folder updated successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

patch/api/templates/{template\_id}/folders/{folder\_id}

https\://documents.kublade.org/api/templates/{template\_id}/folders/{folder\_id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"name": "string",
"parent_id": "string"
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Folder updated successfully",
"data": {
"folder": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"parent_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "Directory 1",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/35c264de7d322fb8af7f55785e8486a4)List the files<!-- -->

List the files.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |

##### query<!-- --> Parameters

|        |                             |
| ------ | --------------------------- |
| cursor | stringCursor for pagination |

### Responses

**200<!-- -->**

Files retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/templates/{template\_id}/files

https\://documents.kublade.org/api/templates/{template\_id}/files

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Files retrieved successfully",
"data": {
"files": [
{
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"template_directory_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "File 1",
"mime_type": "text/plain",
"content": "Content of the file",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
],
"links": {
"next": "string",
"prev": "string"
}
}
}`

## [](#tag/Templates/operation/fb2c49fe478f9f09f921794ec66ec546)Add a new file<!-- -->

Add a new file.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |

##### Request Body schema: application/jsonrequired

|                         |                |
| ----------------------- | -------------- |
| name                    | string         |
| template\_directory\_id | string or null |
| mime\_type              | string         |

### Responses

**200<!-- -->**

File added successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/templates/{template\_id}/files

https\://documents.kublade.org/api/templates/{template\_id}/files

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"name": "string",
"template_directory_id": "string",
"mime_type": "string"
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "File added successfully",
"data": {
"file": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"template_directory_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "File 1",
"mime_type": "text/plain",
"content": "Content of the file",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/9a8566eb18c2d7f4a2524b45873bb746)Get the file<!-- -->

Get the file.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| file\_idrequired     | stringThe ID of the file     |

### Responses

**200<!-- -->**

File retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/templates/{template\_id}/files/{file\_id}

https\://documents.kublade.org/api/templates/{template\_id}/files/{file\_id}

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "File retrieved successfully",
"data": {
"file": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"template_directory_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "File 1",
"mime_type": "text/plain",
"content": "Content of the file",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/c22c64ea61ba3924177cc2e8db18cb5a)Delete the file<!-- -->

Delete the file.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| file\_idrequired     | stringThe ID of the file     |

### Responses

**200<!-- -->**

File deleted successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

delete/api/templates/{template\_id}/files/{file\_id}

https\://documents.kublade.org/api/templates/{template\_id}/files/{file\_id}

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "File deleted successfully",
"data": {
"file": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"template_directory_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "File 1",
"mime_type": "text/plain",
"content": "Content of the file",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/41c4aa395c82743e26b9c345508bbaed)Update the file<!-- -->

Update the file.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| file\_idrequired     | stringThe ID of the file     |

##### Request Body schema: application/jsonrequired

|                         |                |
| ----------------------- | -------------- |
| name                    | string         |
| template\_directory\_id | string or null |
| mime\_type              | string         |
| content                 | string or null |

### Responses

**200<!-- -->**

File updated successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

patch/api/templates/{template\_id}/files/{file\_id}

https\://documents.kublade.org/api/templates/{template\_id}/files/{file\_id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"name": "string",
"template_directory_id": "string",
"mime_type": "string",
"content": "string"
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "File updated successfully",
"data": {
"file": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"template_directory_id": "123e4567-e89b-12d3-a456-426614174000",
"name": "File 1",
"mime_type": "text/plain",
"content": "Content of the file",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/b1e9d34828f1750b923a5d5527185ff0)List the fields<!-- -->

List the fields.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |

##### query<!-- --> Parameters

|        |                             |
| ------ | --------------------------- |
| cursor | stringCursor for pagination |

### Responses

**200<!-- -->**

Fields retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/templates/{template\_id}/fields

https\://documents.kublade.org/api/templates/{template\_id}/fields

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Fields retrieved successfully",
"data": {
"fields": [
{
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"advanced": false,
"type": "text",
"required": false,
"secret": false,
"label": "Label",
"key": "key",
"value": "Value",
"min": 0,
"max": 0,
"step": 0,
"set_on_create": false,
"set_on_update": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
],
"links": {
"next": "string",
"prev": "string"
}
}
}`

## [](#tag/Templates/operation/6b57df8f7a0ab646ba93be49f0fe8509)Add a new field<!-- -->

Add a new field.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |

##### Request Body schema: application/jsonrequired

|                 |                 |
| --------------- | --------------- |
| type            | string          |
| label           | string          |
| key             | string          |
| value           | string or null  |
| required        | boolean or null |
| secret          | boolean or null |
| set\_on\_create | boolean or null |
| set\_on\_update | boolean or null |
| min             | number or null  |
| max             | number or null  |
| step            | number or null  |

### Responses

**200<!-- -->**

Field added successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/templates/{template\_id}/fields

https\://documents.kublade.org/api/templates/{template\_id}/fields

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"type": "string",
"label": "string",
"key": "string",
"value": "string",
"required": true,
"secret": true,
"set_on_create": true,
"set_on_update": true,
"min": 0,
"max": 0,
"step": 0
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Field added successfully",
"data": {
"field": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"advanced": false,
"type": "text",
"required": false,
"secret": false,
"label": "Label",
"key": "key",
"value": "Value",
"min": 0,
"max": 0,
"step": 0,
"set_on_create": false,
"set_on_update": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/3aaabb69051dd5aac703114ab759573e)Get the field<!-- -->

Get the field.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| field\_idrequired    | stringThe ID of the field    |

### Responses

**200<!-- -->**

Field retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/templates/{template\_id}/fields/{field\_id}

https\://documents.kublade.org/api/templates/{template\_id}/fields/{field\_id}

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Field retrieved successfully",
"data": {
"field": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"advanced": false,
"type": "text",
"required": false,
"secret": false,
"label": "Label",
"key": "key",
"value": "Value",
"min": 0,
"max": 0,
"step": 0,
"set_on_create": false,
"set_on_update": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/e0bd4480e450d32f71e92b38d856b0ff)Delete the field<!-- -->

Delete the field.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| field\_idrequired    | stringThe ID of the field    |

### Responses

**200<!-- -->**

Field deleted successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

delete/api/templates/{template\_id}/fields/{field\_id}

https\://documents.kublade.org/api/templates/{template\_id}/fields/{field\_id}

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Field deleted successfully",
"data": {
"field": { }
}
}`

## [](#tag/Templates/operation/fd2v2.11.235f1fa2b9799e02b92a986b9)Update the field<!-- -->

Update the field.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| field\_idrequired    | stringThe ID of the field    |

##### Request Body schema: application/jsonrequired

|                 |                 |
| --------------- | --------------- |
| type            | string          |
| label           | string          |
| key             | string          |
| value           | string or null  |
| required        | boolean or null |
| secret          | boolean or null |
| set\_on\_create | boolean or null |
| set\_on\_update | boolean or null |
| min             | number or null  |
| max             | number or null  |
| step            | number or null  |

### Responses

**200<!-- -->**

Field updated successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

patch/api/templates/{template\_id}/fields/{field\_id}

https\://documents.kublade.org/api/templates/{template\_id}/fields/{field\_id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"type": "string",
"label": "string",
"key": "string",
"value": "string",
"required": true,
"secret": true,
"set_on_create": true,
"set_on_update": true,
"min": 0,
"max": 0,
"step": 0
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Field updated successfully",
"data": {
"field": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"advanced": false,
"type": "text",
"required": false,
"secret": false,
"label": "Label",
"key": "key",
"value": "Value",
"min": 0,
"max": 0,
"step": 0,
"set_on_create": false,
"set_on_update": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/e826b993f285ae7ce39368af61a2fbe0)List the options<!-- -->

List the options.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| field\_idrequired    | stringThe ID of the field    |

##### query<!-- --> Parameters

|        |                             |
| ------ | --------------------------- |
| cursor | stringCursor for pagination |

### Responses

**200<!-- -->**

Options retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/templates/{template\_id}/fields/{field\_id}/options

https\://documents.kublade.org/api/templates/{template\_id}/fields/{field\_id}/options

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Options retrieved successfully",
"data": {
"options": [
{
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_field_id": "123e4567-e89b-12d3-a456-426614174000",
"label": "Label",
"value": "Value",
"default": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
],
"links": {
"next": "string",
"prev": "string"
}
}
}`

## [](#tag/Templates/operation/02d63db7da088ded97817429d16dcd90)Add a new option<!-- -->

Add a new option.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| field\_idrequired    | stringThe ID of the field    |

##### Request Body schema: application/jsonrequired

|         |                 |
| ------- | --------------- |
| label   | string          |
| value   | string          |
| default | boolean or null |

### Responses

**200<!-- -->**

Option added successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/templates/{template\_id}/fields/{field\_id}/options

https\://documents.kublade.org/api/templates/{template\_id}/fields/{field\_id}/options

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"label": "string",
"value": "string",
"default": true
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Option added successfully",
"data": {
"option": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_field_id": "123e4567-e89b-12d3-a456-426614174000",
"label": "Label",
"value": "Value",
"default": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/4ea96ac3f2ac46baf6a2a0102d8a62da)Get the option<!-- -->

Get the option.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| field\_idrequired    | stringThe ID of the field    |
| option\_idrequired   | stringThe ID of the option   |

### Responses

**200<!-- -->**

Option retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/templates/{template\_id}/fields/{field\_id}/options/{option\_id}

https\://documents.kublade.org/api/templates/{template\_id}/fields/{field\_id}/options/{option\_id}

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Option retrieved successfully",
"data": {
"option": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_field_id": "123e4567-e89b-12d3-a456-426614174000",
"label": "Label",
"value": "Value",
"default": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/e1b8839cc98d1606996b1d528f4f09f1)Delete the option<!-- -->

Delete the option.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| field\_idrequired    | stringThe ID of the field    |
| option\_idrequired   | stringThe ID of the option   |

### Responses

**200<!-- -->**

Option deleted successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

delete/api/templates/{template\_id}/fields/{field\_id}/options/{option\_id}

https\://documents.kublade.org/api/templates/{template\_id}/fields/{field\_id}/options/{option\_id}

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Option deleted successfully",
"data": {
"option": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_field_id": "123e4567-e89b-12d3-a456-426614174000",
"label": "Label",
"value": "Value",
"default": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/05561297a48105edaac00584dcb3a849)Update the option<!-- -->

Update the option.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| field\_idrequired    | stringThe ID of the field    |
| option\_idrequired   | stringThe ID of the option   |

##### Request Body schema: application/jsonrequired

|         |                 |
| ------- | --------------- |
| label   | string          |
| value   | string          |
| default | boolean or null |

### Responses

**200<!-- -->**

Option updated successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

patch/api/templates/{template\_id}/fields/{field\_id}/options/{option\_id}

https\://documents.kublade.org/api/templates/{template\_id}/fields/{field\_id}/options/{option\_id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"label": "string",
"value": "string",
"default": true
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Option updated successfully",
"data": {
"option": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_field_id": "123e4567-e89b-12d3-a456-426614174000",
"label": "Label",
"value": "Value",
"default": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/1a220594d472f09228c992905ee9d1b1)List the ports<!-- -->

List the ports.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |

##### query<!-- --> Parameters

|        |                             |
| ------ | --------------------------- |
| cursor | stringCursor for pagination |

### Responses

**200<!-- -->**

Ports retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/templates/{template\_id}/ports

https\://documents.kublade.org/api/templates/{template\_id}/ports

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Ports retrieved successfully",
"data": {
"ports": [
{
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"group": "Group",
"claim": "Claim",
"preferred_port": 0,
"random": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
],
"links": {
"next": "string",
"prev": "string"
}
}
}`

## [](#tag/Templates/operation/1594d457fd3901e5cfb24b66136f1d76)Add a new port<!-- -->

Add a new port.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |

##### Request Body schema: application/jsonrequired

|                 |                 |
| --------------- | --------------- |
| group           | string          |
| claim           | string or null  |
| preferred\_port | number or null  |
| random          | boolean or null |

### Responses

**200<!-- -->**

Port added successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/templates/{template\_id}/ports

https\://documents.kublade.org/api/templates/{template\_id}/ports

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"group": "string",
"claim": "string",
"preferred_port": 0,
"random": true
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Port added successfully",
"data": {
"port": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"group": "Group",
"claim": "Claim",
"preferred_port": 0,
"random": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/ac854ed144c58457795ec9bd0079f0d5)Get the port<!-- -->

Get the port.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| port\_idrequired     | stringThe ID of the port     |

### Responses

**200<!-- -->**

Port retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/templates/{template\_id}/ports/{port\_id}

https\://documents.kublade.org/api/templates/{template\_id}/ports/{port\_id}

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Port retrieved successfully",
"data": {
"port": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"group": "Group",
"claim": "Claim",
"preferred_port": 0,
"random": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/71488471fcc8cd7f09fd1df9c9b1cf06)Delete the port<!-- -->

Delete the port.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| port\_idrequired     | stringThe ID of the port     |

### Responses

**200<!-- -->**

Port deleted successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

delete/api/templates/{template\_id}/ports/{port\_id}

https\://documents.kublade.org/api/templates/{template\_id}/ports/{port\_id}

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Port deleted successfully",
"data": {
"port": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"group": "Group",
"claim": "Claim",
"preferred_port": 0,
"random": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Templates/operation/d08a4b02e225c72782939f5e83f3ffe4)Update the port<!-- -->

Update the port.

##### path<!-- --> Parameters

|                      |                              |
| -------------------- | ---------------------------- |
| template\_idrequired | stringThe ID of the template |
| port\_idrequired     | stringThe ID of the port     |

##### Request Body schema: application/jsonrequired

|                 |                 |
| --------------- | --------------- |
| group           | string          |
| claim           | string or null  |
| preferred\_port | number or null  |
| random          | boolean or null |

### Responses

**200<!-- -->**

Port updated successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

patch/api/templates/{template\_id}/ports/{port\_id}

https\://documents.kublade.org/api/templates/{template\_id}/ports/{port\_id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"group": "string",
"claim": "string",
"preferred_port": 0,
"random": true
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Port updated successfully",
"data": {
"port": {
"id": "123e4567-e89b-12d3-a456-426614174000",
"template_id": "123e4567-e89b-12d3-a456-426614174000",
"group": "Group",
"claim": "Claim",
"preferred_port": 0,
"random": false,
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Users)Users

Endpoints for user management

## [](#tag/Users/operation/2fc98717af297c32a6671d6f09daaf40)List users<!-- -->

List the users.

##### query<!-- --> Parameters

|        |                             |
| ------ | --------------------------- |
| cursor | stringCursor for pagination |

### Responses

**200<!-- -->**

Users retrieved successfully

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/users

https\://documents.kublade.org/api/users

### <!-- -->Response samples<!-- -->

* 200
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Users retrieved successfully",
"data": {
"users": [
{ }
],
"links": {
"next": "string",
"prev": "string"
}
}
}`

## [](#tag/Users/operation/657bb4a7c6b5c50ddf313d3d87c42f85)Add a new user<!-- -->

Add a new user.

##### Request Body schema: application/jsonrequired

|                        |                          |
| ---------------------- | ------------------------ |
| name                   | string                   |
| email                  | string                   |
| password               | string or null           |
| password\_confirmation | string or null           |
| roles                  | Array of strings or null |
| permissions            | Array of strings or null |

### Responses

**200<!-- -->**

User created successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

post/api/users

https\://documents.kublade.org/api/users

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

Expand all  Collapse all

`{
"name": "string",
"email": "string",
"password": "string",
"password_confirmation": "string",
"roles": [
"string"
],
"permissions": [
"string"
]
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "User created successfully",
"data": {
"user": {
"id": "1",
"name": "John Doe",
"email": "john.doe@example.com",
"email_verified_at": "2021-01-01T00:00:00Z",
"password": "password123",
"remember_token": "remember_token123",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Users/operation/7460e6b384b35ef4c6b5c5084ca746dd)Get a user<!-- -->

Get the user.

##### path<!-- --> Parameters

|                  |                          |
| ---------------- | ------------------------ |
| user\_idrequired | stringThe ID of the user |

### Responses

**200<!-- -->**

User retrieved successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**500<!-- -->**

Server error

get/api/users/{user\_id}

https\://documents.kublade.org/api/users/{user\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "User retrieved successfully",
"data": {
"user": { }
}
}`

## [](#tag/Users/operation/c2468ac44f618d912e6dc2dff57f288f)Delete a user<!-- -->

Delete the user.

##### path<!-- --> Parameters

|                  |                          |
| ---------------- | ------------------------ |
| user\_idrequired | stringThe ID of the user |

### Responses

**200<!-- -->**

User deleted successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

delete/api/users/{user\_id}

https\://documents.kublade.org/api/users/{user\_id}

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "User deleted successfully",
"data": {
"user": {
"id": "1",
"name": "John Doe",
"email": "john.doe@example.com",
"email_verified_at": "2021-01-01T00:00:00Z",
"password": "password123",
"remember_token": "remember_token123",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Users/operation/78cd5f575a858192b8abfe39f4843ef2)Update a user<!-- -->

Update the user.

##### path<!-- --> Parameters

|                  |                          |
| ---------------- | ------------------------ |
| user\_idrequired | stringThe ID of the user |

##### Request Body schema: application/jsonrequired

|                        |                          |
| ---------------------- | ------------------------ |
| name                   | string                   |
| email                  | string                   |
| password               | string or null           |
| password\_confirmation | string or null           |
| roles                  | Array of strings or null |
| permissions            | Array of strings or null |

### Responses

**200<!-- -->**

User updated successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

patch/api/users/{user\_id}

https\://documents.kublade.org/api/users/{user\_id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

Expand all  Collapse all

`{
"name": "string",
"email": "string",
"password": "string",
"password_confirmation": "string",
"roles": [
"string"
],
"permissions": [
"string"
]
}`

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "User updated successfully",
"data": {
"user": {
"id": "1",
"name": "John Doe",
"email": "john.doe@example.com",
"email_verified_at": "2021-01-01T00:00:00Z",
"password": "password123",
"remember_token": "remember_token123",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00"
}
}
}`

## [](#tag/Users/operation/f450937fb7127a05a321c4f075fd65bd)Generate a magic link for the user<!-- -->

Generate a magic link for the user.

##### path<!-- --> Parameters

|                  |                          |
| ---------------- | ------------------------ |
| user\_idrequired | stringThe ID of the user |

### Responses

**200<!-- -->**

Magic link generated successfully

**400<!-- -->**

Validation error

**401<!-- -->**

Unauthorized

**404<!-- -->**

Not found

**500<!-- -->**

Server error

post/api/users/{user\_id}/magic-link

https\://documents.kublade.org/api/users/{user\_id}/magic-link

### <!-- -->Response samples<!-- -->

* 200
* 400
* 401
* 404
* 500

Content type

application/json

Copy

Expand all  Collapse all

`{
"status": "success",
"message": "Magic link generated successfully",
"data": {
"user": {
"id": "1",
"name": "John Doe",
"email": "john.doe@example.com",
"email_verified_at": "2021-01-01T00:00:00Z",
"password": "password123",
"remember_token": "remember_token123",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00"
},
"link": "https://example.com/auth/magic-link/1234567890",
"expires_at": "2025-01-01T00:00:0v2.11.2000Z"
}
}`

Resources

* [Why Kublade?](/why-kublade.md)
* [Documentation](/docs/intro.md)
* [API](/api.md)
* [Enterprise Support](/enterprise-support.md)

Community

* [GitHub](https://github.com/kublade/kublade)
* [Gitter](https://matrix.to/#/#kublade:gitter.im)

Legal

* [Legal Disclosure](/legal-disclosure.md)
* [Privacy Policy](/privacy-policy.md)

Copyright © 2025 IPvX UG (haftungsbeschränkt)
