<!doctype html>
<html lang="en" class="bg-white">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
    <title>E-mail</title>
</head>
<body class="bg-white">
<div class="container-fluid flex justify-center p-3 bg-white">
    <form class="w-full max-w-md mt-2 bg-white">
        <h1 class="text-blue-darker block sm:flex items-center">New Contact Message</h1>
        <div class="flex flex-wrap -mx-3 mb-6 mt-8">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-xs font-bold mb-2 text-grey-darker">
                    Full Name
                </label>
                <p class="appearance-none border-grey block w-full text-grey-darker border border-grey rounded p-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey-darker">
                    {{ $contactMessage->name }}
                </p>
            </div>
            <div class="w-full mt-8 px-3">
                <label class="block uppercase text-grey-darker tracking-wide text-xs font-bold mb-2"for="email">
                    Email Address
                </label>
                <p class="bg-white border-grey block w-full text-grey-darker border border-grey rounded p-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey-darker">
                    {{ $contactMessage->email }}
                </p>
            </div>
            <div class="w-full mt-8 px-3">
                <label class="block uppercase tracking-wide text-xs font-bold mb-2">
                    What's this about?
                </label>
                @if ($contactMessage->enquiry_types->count() === 0)
                    <p class="enquiry-option mr-2 w-full block sm:w-auto sm:inline-block bg-blue-darker text-white my-2 bg-transparent font-semibold py-2 px-4 border border-grey-darkest rounded">
                        General Inquiry
                    </p>
                @else
                    @foreach($contactMessage->enquiry_types as $enquiry_type)
                        @if($enquiry_type->state)
                            <p class="enquiry-option mr-2 w-full block sm:w-auto sm:inline-block bg-blue-darker text-white my-2 bg-transparent font-semibold py-2 px-4 border border-grey-darkest rounded">
                                {{ $enquiry_type->text }}
                            </p>
                        @else
                            <p class="enquiry-option mr-2 w-full block sm:w-auto sm:inline-block text-blue-darker my-2 bg-transparent font-semibold py-2 px-4 border border-grey-darkest rounded">
                                {{ $enquiry_type->text }}
                            </p>
                        @endif
                    @endforeach
                @endif
            </div>
            <div class="w-full mt-6 px-3">
                <label class="block uppercase text-grey-darker tracking-wide text-grey-darker text-xs font-bold mb-2" for="more-details">
                    Anything else to add?</label>
                <textarea
                        disabled
                        id="more-details"
                        placeholder="Some very important information"
                        class="appearance-none border-grey block w-full h-32 text-grey-darker border rounded p-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey-darker resize-none">
{{ $contactMessage->message }}
                </textarea>
            </div>
        </div>
    </form>
</div>
</body>
</html>
