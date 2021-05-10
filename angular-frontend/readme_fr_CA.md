[English Version](README.md)
# Service d'émission DTS VC

## Sommaire 

[TOC]

## Installation et Configuration

L'installation et configuration de l'environnement du service d'émission DTS VC est ordonnée séquentiellement pour garantir que les dépendances logicielles sont disponibles en cas de besoin lors de la configuration. 

### Installation

La liste suivante comprend les logiciels requis pour exécuter l'application, ainsi que l'IDE suggéré avec des extensions pour le développement de clients web, et logiciels pour la gestion du contrôle de code source et le développement / test d'API. 
The following list includes the required software needed to run the application, as well as, the suggested IDE with extensions for web client development, and software for source control management and API development/testing.

#### Git and GitKraken

[Téléchargez](https://git-scm.com/downloads) et installez le *Git version control system*. Optionnellement [téléchargez](https://www.gitkraken.com) et installez le client GitKraken Git GUI gratuit.

Clonez le repo dans un répertoire de GitKraken ou la ligne de commande en saisissant: 

```bash
git clone https://github.com/bcgov/dts-vc-issuer-service.git
```

#### Node

[Téléchargez](https://nodejs.org/en/) et installez **Node v12.x**

#### VS Code

[Téléchargez](https://code.visualstudio.com/) et installez VSCode et acceptez l'invitation pour installer les extensions recommandées lors de l'ouverture initiale du repo de VSCode. 

#### PostMan

[Téléchargez](https://www.getpostman.com/apps) et installez Postman HTTP client.

## Build et exécution

### Client

Pour créer, exécuter et ouvrir l'application Angular dans le navigateur défaut à l'adresse http://localhost:4200 pour le développement, accédez au repo du projet dans le terminal et saisissez: 

```bash
ng serve -o
```

Pour tester la version de production localement avant de pousser les fonctionnalités vers le repo de développement: 

```bash
ng build --prod
```

#### Référence Angular CLI

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 8.3.x. Référez-vous à la documentation d'Anglar CLI pour les commandes disponibles, toutefois les plus utilisées lors du développement seront: 


1. `ng serve -o` pour servir votre application localement en mémoire pendant le développement à `http://localhost:4200` via le navigateur par défaut, qui surveille les modifications, recompile et actualise automatiquement l'application dans le navigateur
1. `ng build` pour construire l'application, qui est stockée dans le répertoire `/dist`. Utilisez le flag `--prod` pour une version de production, ce qui réduit considérablement la taille de l'application
1. `ng g <blueprint>` pour créer un échafaudage de code pour une directive, pipe, service, class, guard, interface, enum, et module
1. `ng lint` pour faire du lint du code de l'application en utilisant TSLint.
1. `ng test` pour exécuter les tests unitaires via [Karma](https://karma-runner.github.io). Le testeur a une variété d'options qui peuvent être utilisées pour affiner la façon dont la suite de tests est exécutée et qui peuvent être trouvées en exécutant `ng test --help`. L'une de ces options permettre de restreindre les tests exécutés grâce à l'utilisation de modèles de globbing - `ng test --include='**/*.pipe.spec.ts'`.
1. `ng e2e` pour exécuter les tests de bout en bout via [Protractor](http://www.protractortest.org/).

##### Obtenir de l'aide

1. Pour obtenir plus d'aide sur la CLI Angular, utilisez `ng help`
1. `ng doc component` pour rechercher de la documentation sur les fonctionnalités
1. `ng serve --help`pour chercher de la documentation sur la commande `ng serve`

## Styles de codage

Les styles de codage doivent toujours adhérer au [Guide de style Angular](https://angular.io/docs/ts/latest/guide/style-guide.html)! La configuration de la configuration de l'éditeur pour le projet aidera également avec le style de codage automatiquement, ainsi que les paramètres VSCode.
