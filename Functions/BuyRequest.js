function BuyRequest(userSeller, user, setUser, plat, count) {
  const numberCoinSeller = {
    Coin: userSeller.Coin + count,
  };

  const numberCoinBuyer = {
    Coin: user.Coin - count,
  };

  const numberPartAfterRequest = {
    part: plat.part - count,
  };

  if (numberCoinBuyer.Coin >= 0) {
    const headerRequest = new Headers();
    headerRequest.append('Content-Type', 'application/json');
    headerRequest.append('Accept', 'application/json');
    headerRequest.append('Authorization', `Bearer ${user.token}`);

    const postOptionsSeller = {
      method: 'PUT',
      body: JSON.stringify(numberCoinSeller),
      headers: headerRequest,
      cache: 'default',
    };

    const requeteSeller = new Request(
      `http://localhost:8000/api/users/${userSeller.id}`
    );

    fetch(requeteSeller, postOptionsSeller).then((res) => {
      if (res.status < 400) {
        res.json().then(() => {
          const postOptionsBuyer = {
            method: 'PUT',
            body: JSON.stringify(numberCoinBuyer),
            headers: headerRequest,
            cache: 'default',
          };
          const requeteBuyer = new Request(
            `http://localhost:8000/api/users/${user.id}`
          );

          fetch(requeteBuyer, postOptionsBuyer).then((res2) => {
            if (res2.status < 400) {
              res2.json().then((change) => {
                setUser({
                  id: user.id,
                  email: user.email,
                  token: user.token,
                  nom: user.nom,
                  prenom: user.prenom,
                  adresse: user.adresse,
                  dateNaissance: user.dateNaissance,
                  Coin: change.Coin,
                });

                const requeteRequest = new Request(
                  `http://localhost:8000/api/commandes/${plat.id}`
                );

                if (numberPartAfterRequest.part === 0) {
                  const postOptionsDeleteRequest = {
                    method: 'DELETE',
                    headers: headerRequest,
                    cache: 'default',
                  };

                  fetch(requeteRequest, postOptionsDeleteRequest).then(
                    (res3) => {
                      if (res3.status < 400) {
                        res3.json().then((change2) => {
                          console.log(change2);
                          alert('Votre commande a été passée !');

                          document.location.reload();
                        });
                      }
                    }
                  );
                } else {
                  const postOptionsPutRequest = {
                    method: 'PUT',
                    body: JSON.stringify(numberPartAfterRequest),
                    headers: headerRequest,
                    cache: 'default',
                  };

                  fetch(requeteRequest, postOptionsPutRequest).then((res3) => {
                    if (res3.status < 400) {
                      res3.json().then((change2) => {
                        console.log(change2);
                        alert('Votre commande a été passée !');
                        document.location.reload();
                      });
                    }
                  });
                }
              });
            }
          });
        });
      }
    });
  } else {
    alert("Vous n'avez pas assez de pièces");
  }
}

export default BuyRequest;
