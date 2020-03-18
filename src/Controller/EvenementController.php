<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Evenement;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\EvenementRepository;

class EvenementController extends AbstractController
{
    /**
     * @Route("/evenement", name="create_evenement")
     */
    public function createEvenement(): Response
    {
        // you can fetch the EntityManager via $this->getDoctrine()
        // or you can add an argument to the action: createProduct(EntityManagerInterface $entityManager)
        $entityManager = $this->getDoctrine()->getManager();

        $evenement = new Evenement();
        $evenement->setNom('Gandhi');
        $evenement->setPeriode(1930);
        $evenement->setLieu('Inde');
        $evenement->setLutte("contre l’injustice caractérisée ; pour la promotion de nouveaux droits");
        $evenement->setStrategie("résistance non-violente");
        $evenement->setAction("Dans un contexte de luƩ e pour l’autonomie de l’Inde, alors sous protectorat britannique, Gandhi s’oppose à une loi jugée injuste, obligeant les Indien·ne·s, à
                            payer un impôt sur le sel et leur interdisant d’en récolter. Il organise, en 1930, la ‘Marche du sel’ et choisit 79 personnes pour parcourir 350 km en 25 jours en vue
                            de déclencher un mouvement de masse. Pendant les haltes, le public est sensibilisé au statut des femmes, à l’aboliƟ on des castes, à l’autonomie… ");
        $evenement->setVictoire("En réaction, les Britanniques jettent en prison plus de 60 000 contrevenant·e·s ! Gandhi lui-même est incarcéré durant 9 mois. Le 5 mars 1931, après
                            de longues et dures négociations, Gandhi et le vice-roi Irwin signent le pacte de Delhi qui permet, sans abolir complètement la taxe, une consommation libre
                            et une producƟ on limitée aux villageois·e·s proches des lieux de producƟ on. Au-delà de ce résultat, c’est avant tout l’impact de la force non-violente du
                            mouvement qui marque profondément, encore aujourd’hui, les actions de désobéissance civile");
        $evenement->setAnecdote("Gandhi théorise son mode de résistance non-violent « satyagraha – attachement ferme à la vérité » en diff érents principes : comprendre d’abord,
                            agir ensuite ; adopter une posture ferme et respectueuse vis-à-vis de l’adversaire ; organiser une résistance ‘passive’ ; concevoir des acƟ ons simples et marquantes !");
        $evenement->setCitation("La victoire obtenue par la violence équivaut à une défaite, car elle est momentanée");

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($evenement);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Nouvel evenement enregisté avec l\'id '.$evenement->getId());
    }

    /**
     * @Route("/evenement/{id}", name="evenement_show")
     */
    public function show($id)
    {
        $evenement = $this->getDoctrine()
            ->getRepository(Evenement::class)
            ->find($id);

        if (!$evenement) {
            throw $this->createNotFoundException(
                'Pas d\'evenement trouvé avec l\'id '.$id
            );
        }
        return new Response('Cet événement : ' . $evenement->getDescription() . ' était marquant');
    }
}
