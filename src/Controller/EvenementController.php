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
        $evenement->setLieu('Inde');
        $evenement->setDate(1947);
        $evenement->setDescription('Gandhi s\'est battu pour l\'independence de l\'Inde.');

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
