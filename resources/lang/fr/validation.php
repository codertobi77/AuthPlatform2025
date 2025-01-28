<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Messages de validation par défaut
    |--------------------------------------------------------------------------
    |
    | Les lignes suivantes contiennent les messages par défaut utilisés par la
    | classe de validation. N'hésitez pas à personnaliser chaque message.
    |
    */
    'required' => 'Le champ :attribute est obligatoire.',
    'email' => 'Le champ :attribute doit être une adresse e-mail valide.',
    'string' => 'Le champ :attribute doit être une chaîne de caractères.',
    'min' => [
        'string' => 'Le champ :attribute doit contenir au moins :min caractères.',
    ],
    'confirmed' => 'La confirmation de :attribute ne correspond pas.',

    /*
    |--------------------------------------------------------------------------
    | Messages personnalisés pour des attributs spécifiques
    |--------------------------------------------------------------------------
    |
    | Vous pouvez personnaliser les messages de validation pour des champs
    | spécifiques de votre formulaire ici.
    |
    */
    'custom' => [
        'email' => [
            'required' => 'Veuillez fournir une adresse e-mail.',
            'email' => 'L’adresse e-mail fournie n’est pas valide.',
        ],
        'password' => [
            'required' => 'Le mot de passe est obligatoire.',
            'min' => 'Le mot de passe doit contenir au moins :min caractères.',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Remplacement des noms des attributs
    |--------------------------------------------------------------------------
    |
    | La ligne suivante est utilisée pour remplacer les noms des attributs
    | par des termes plus conviviaux, comme "Adresse e-mail" au lieu de "email".
    |
    */
    'attributes' => [
        'email' => 'adresse e-mail',
        'password' => 'mot de passe',
    ],
];
