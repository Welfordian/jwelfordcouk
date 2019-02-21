<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>E-mail</title>
</head>
<body>
    <h2>New Message From {{ $contactMessage->name }} ({{ $contactMessage->email }})</h2>

    <p>{{ $contactMessage->message }}</p>
</body>
</html>