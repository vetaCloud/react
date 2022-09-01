<p align="center">
<img src="https://beta-dashboard.vetacloud.com/assets/vC-png-2.a21a37aa.png"></img>
</p>

# vetaCloud v0.1 React Integration 

How to use

`npm i axios`

app.js
```javascript
var axios = require('axios');
```
Axios is used to post the file to our server. HTTP would be integrated in subsequent versions

Your Private Key would be needed for the next process. You can get it [here](https://dashboard.vetacloud.com/api-key)

# vetaCloud features avalable in React JS
1. Basic upload
2. Image upload with optimization in parameters
3. Video upload with optimization in parameters
4. Delete file 
5. Fetch all files in a route 
6. Webhook
7. Extra 

<br>

# Basic upload

Your Private key can be found on your [dashboard](https://dashboard.vetacloud.com/api-key). Make sure you are sending your API KEY and Route Name in the request header.

```javascript
    const formData = new FormData();
    formData.append("file", file);
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      X_API_KEY: "VTCD_PRIVATE_dee91a7c05bdaf5f648ef378318aca",
      X_ROUTE_NAME: "posts-images"
    };

    const data = await axios({
      method: 'post',
      headers: headers,
      url: "http://localhost/client/50/50/10",
      data: formData
    })
    console.log(data)
```
Note: Please take a look at [this](https://github.com/vetaCloud/react/blob/main/src/App.js) to understand better. The files that are uploaded via this endpoint are subject to the Route type, image optimization specified in the route and the video optimization specified 

# Image upload with optimization in parameters
Images that are uploaded via this endpoint do not regard the values specified for image optimization in the route although there could be file rejection if the file uploaded is not an image. The image formats we support at the moment include; .png .jpg .gif .jpeg .svg .webf 

```javascript
    const formData = new FormData();
    formData.append("file", file);
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      X_API_KEY: "VTCD_PRIVATE_dee91a7c05bdaf5f648ef378318aca",
      X_ROUTE_NAME: "posts-images"
    };

    const data = await axios({
      method: 'post',
      headers: headers,
      url: "http://localhost/client/image/50/50/10",
      data: formData
    })
    console.log(data)
```
The first parameter is the height of the image. The second parameter is the length of the image. The third parameter is the quality of the image. To use the default detail of the image's height, length or quality, use 0. If you specify height, you must specify length and vise versa. Quality could be specified alone.


# Video upload with optimization in parameters
Videos that are uploaded via this endpoint do not regard the values specified for video optimization in the route although there could be file rejection if the file uploaded is not a video. The image formats we support at the moment include; .mp4 .mov .wmv .avi .flv .mkv .webm .mpeg-2
```javascript
    const formData = new FormData();
    formData.append("file", file);
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      X_API_KEY: "VTCD_PRIVATE_dee91a7c05bdaf5f648ef378318aca",
      X_ROUTE_NAME: "posts-images"
    };

    const data = await axios({
      method: 'post',
      headers: headers,
      url: "http://localhost/client/video/50/50/10",
      data: formData
    })
    console.log(data)
  ```
The first parameter is the height of the video. The second parameter is the length of the video. The third parameter is the quality of the video. To use the default detail of the video's height, length or quality, use 0. If you specify height, you must specify length and vise versa. If you specify length, width and quality, only the first two would be regarded

# Delete file

To delete a file, the name of the file is required.

```javascript
 headers: {'X_API_KEY': 'VTCD_PRIVATE_2cd6793f8daa684155ceed6b2a9c01', 
 'X_ROUTE_NAME': "profile-picture", 
 'X_FILE_NAME': "IHNUBDUpl2facbgCu-BSp.png"},

const data = await axios({
  method: 'delete',
  headers: headers,
  url: "http://localhost/client/",
  data: formData
})
console.log(data)

```

# Fetch all files in a route 
This would fetch all the files you have in a route alongside their details.
```javascript
headers: {'X_API_KEY': 'VTCD_PRIVATE_2cd6793f8daa684155ceed6b2a9c01', 'X_ROUTE_NAME': "profile-picture"},

const data = await axios({
  method: 'get',
  headers: headers,
  url: 'https://cloud.vetacloud.com/client/files',
  data: formData
})
console.log(data)

```

# Webhook
The webhook for every upload is in the response's data. 

### ```Successful file upload```
A successful file upload webhook is similar to this.
QR Route is generated for all users but the code is generated for only Advanced and Premium users. QR Route is the route of a QR Code which holds the link to the file. 

```javascript
{
  status: 'success',
  message: 'Successfully Uploaded',
  file: {
    name: 'QeXhRhba3OVD2ZeLwguUW.jpg',
    destination: 'https://cloud.vetacloud.com/uploads/VTCD_PUBLIC_f2b95f3a6138e01f51de562ff10a9d/profile-picture/QeXhRhba3OVD2ZeLwguUW.jpg',
    size: 0.068369,
    qrroute: 'https://cloud.vetacloud.com/qrCodes/fdd836b12c8ee44d59df6eb42972910b4df628ecf991889994b753c36bfe.png'
  }
}
 ```
 The size is in Megabyte. We believe this simplifies accountability for users.
 
 ### ```Unsuccessful file upload```
 There are so many types of errors that could be returned if a file isnt successfully uploaded but below is an example.
 
 ```javascript
 { status: 'error', message: 'File too large' }
 ```
 
 ```Successful file delete```
 Here is the response y'll get if a file has been successfully deleted 
  ```javascript
 {
  status: 'success',
  message: 'File successfully deleted'
}
 ```
 
 ### ```Unsuccessful file delete```
  When a file is not successfully deleted, the issue is mostly that the delete request has been made before, the file doesn't exist or the file name is wrong.
   ```javascript 
 {
  status: 'error',
  message: 'File not found. Please check your private key and file name to make sure they are correct'
}
  ```
### ```Fetch all files in a route ```

 ```javascript 
{
  status: 'success',
  message: [
    {
      name: 'bu6W9WN5FTceSgufxZ7c5.jpg',
      upload_key: 'VTCD_PUBLIC_f2b95f3a6138e01f51de562ff10a9d',
      route: 'profile-picture',
      fileroute: 'https://cloud.vetacloud.com/uploads/VTCD_PUBLIC_f2b95f3a6138e01f51de562ff10a9d/profile-picture/bu6W9WN5FTceSgufxZ7c5.jpg',
      date: 'Jul 2022 Thu at 19:4',
      size: '68369',
      mime_type: 'image/jpeg',
      qrroute: 'https://cloud.vetacloud.com/qrCodes/df861cd86a8dcf90931a11405c96da460cfa9832bed107b417c94b170d2d.png'
    },
    {
      name: '7lHz7iyI9Xfz2TArqImlG.jpg',
      upload_key: 'VTCD_PUBLIC_f2b95f3a6138e01f51de562ff10a9d',
      route: 'profile-picture',
      fileroute: 'https://cloud.vetacloud.com/uploads/VTCD_PUBLIC_f2b95f3a6138e01f51de562ff10a9d/profile-picture/7lHz7iyI9Xfz2TArqImlG.jpg',
      date: 'Jul 2022 Thu at 19:23',
      size: '68369',
      mime_type: 'image/jpeg',
      qrroute: 'https://cloud.vetacloud.com/qrCodes/932f698d703e5d97ec8a8fcdf0a80990220d54cfd29cd9f69121f219ca87.png'
    },
    {
      name: 'jjdEg3wXAUwe9TbhDGag2.jpg',
      upload_key: 'VTCD_PUBLIC_f2b95f3a6138e01f51de562ff10a9d',
      route: 'profile-picture',
      fileroute: 'https://cloud.vetacloud.com/uploads/VTCD_PUBLIC_f2b95f3a6138e01f51de562ff10a9d/profile-picture/jjdEg3wXAUwe9TbhDGag2.jpg',
      date: 'Jul 2022 Thu at 19:30',
      size: '68369',
      mime_type: 'image/jpeg',
      qrroute: 'https://cloud.vetacloud.com/qrCodes/d92deb08d4daad51af5b389192cff952f1c296dadc5659efc29cf53b8731.png'
    },
    {
      name: 'Hr9MezAldZqu8ZTEn5IHS.jpg',
      upload_key: 'VTCD_PUBLIC_f2b95f3a6138e01f51de562ff10a9d',
      route: 'profile-picture',
      fileroute: 'https://cloud.vetacloud.com/uploads/VTCD_PUBLIC_f2b95f3a6138e01f51de562ff10a9d/profile-picture/Hr9MezAldZqu8ZTEn5IHS.jpg',
      date: 'Jul 2022 Thu at 19:33',
      size: '68369',
      mime_type: 'image/jpeg',
      qrroute: 'https://cloud.vetacloud.com/qrCodes/50b27205d5fa6a9b13ba2624722e7773828790404e9533e09cef4e9fe944.png'
    },
    {
      name: 'dE0DGao5zJ7M-4qV-Rg_V.jpg',
      upload_key: 'VTCD_PUBLIC_f2b95f3a6138e01f51de562ff10a9d',
      route: 'profile-picture',
      fileroute: 'https://cloud.vetacloud.com/uploads/VTCD_PUBLIC_f2b95f3a6138e01f51de562ff10a9d/profile-picture/dE0DGao5zJ7M-4qV-Rg_V.jpg',
      date: 'Jul 2022 Thu at 19:38',
      size: '68369',
      mime_type: 'image/jpeg',
      qrroute: 'https://cloud.vetacloud.com/qrCodes/07b0c89456563eea555daa3d5572ab5c3b3a4bc490c6064c08708ba10def.png'
    }
  ]
}
 ```
 # Extra
 We only support one file upload at the moment. Name your file field "file" - we recognize files faster this way. The maximum file size we allow is 300 MB. This would increase in our future updates. Okay, byeee!
