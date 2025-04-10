
# 🎬 Movie Reservation App

Bienvenue dans **Movie Reservation App**, une application complète pour réserver des films 🎥 avec un système d'authentification sécurisé 🔐, un backend en **NestJS** et un frontend en **React**.

---

## 🧠 Description du projet

Cette application permet aux utilisateurs de :

- Créer un compte ou se connecter via une API sécurisée
- Réserver un film sur un créneau de 2h
- Voir ses réservations passées
- Annuler une réservation
- S’assurer qu’il n’y a pas de conflits de créneaux ou trop de réservations rapprochées

Le backend est sécurisé avec **JWT**, testé avec **Jest**, documenté avec **Swagger**, et persiste les données avec **PostgreSQL** via TypeORM.

---

## 📦 Partie Backend – NestJS

### ▶️ Lancer l'application

1. Cloner le repo

```bash
git clone https://github.com/cleluke/MoviieBooker.git
cd server
```

2. Installer les dépendances

```bash
npm install
```

3. Créer un fichier `.env` avec :

```env
JWT_SECRET=tonSuperSecret
DATABASE_URL=postgresql://nest_auth_db_user:k3pRSE0dD6okm2TCFGmGPcZL220zcEmx@dpg-cvrolmmr433s73b0hehg-a.frankfurt-postgres.render.com/nest_auth_db
```

4. Lancer l’application

```bash
npm run start:dev
```

---

### 🧪 Lancer les tests unitaires

```bash
npm run test
```

---

## 🌐 Documentation Swagger

Une fois l’application démarrée, accède à la documentation interactive :

👉 https://moviiebooker-3e00.onrender.com/api

---

## 🖼️ Partie Frontend – React

1. Aller dans le dossier frontend

```bash
cd client
```

2. Installer les dépendances

```bash
npm install
```

3. Créer un fichier `.env` avec :

```env
REACT_APP_API_URL=http://localhost:3000
```

4. Lancer l’application

```bash
npm start
```

---

## ⚙️ Tech Stack

- **Backend** : NestJS, TypeORM, PostgreSQL, Swagger, JWT, Jest
- **Frontend** : React, Axios, React Router
- **Sécurité** : Authentification JWT + Guards
- **Tests** : Jest + TypeORM mocks
- **Doc API** : Swagger

---

## 🔗 Ressources utilisées

- [Documentation NestJS](https://docs.nestjs.com)
- [Swagger pour NestJS](https://docs.nestjs.com/openapi/introduction)
- [Jest](https://jestjs.io)
- [ReactJS Docs](https://reactjs.org/docs/getting-started.html)
- [Article utilisé](https://dev.to/buildwithgagan/building-a-login-and-registration-system-using-nestjs-with-typeorm-and-postgresql-19hh)

---

## 📬 Auteur

Développé ️ par Clément SUIRE


