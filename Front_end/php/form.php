<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
		<h1>Contact</h1>
        <p>
        <?php
        $retour=mail(contact@monsite.fr,'Envoi depuis la page contact de monsite.fr', $_POST['message'], 'From:'.$_POST['email']);
        if($retour)
            echo 'Votre message a bien été envoyé !';
        ?>
        </p>
    </body>
</html>
