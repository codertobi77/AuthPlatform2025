# INSTI Auth Platform API

Ce projet est une API d'authentification construite avec Laravel pour l'Institut National Supérieur de Technologie Industrielle (INSTI) de Lokossa. Elle permet de gérer l'authentification des utilisateurs pour plusieurs modules d'une plateforme. Cette API supporte les opérations de connexion, de déconnexion et la gestion des rôles.

## Fonctionnalités

### 1. Authentification des utilisateurs
L'API permet aux utilisateurs de se connecter avec leur adresse email et mot de passe. Une fois connectés, l'API retourne un token d'authentification qui peut être utilisé pour authentifier des requêtes ultérieures.

### 2. Gestion des rôles
Les utilisateurs se voient attribuer des rôles lors de la connexion, ce qui permet de déterminer leurs permissions et accès au sein des différents modules.

### 3. API RESTful
L'API suit une architecture RESTful et peut être utilisée pour authentifier les utilisateurs dans des applications front-end (par exemple avec React) ou d'autres services tiers.

