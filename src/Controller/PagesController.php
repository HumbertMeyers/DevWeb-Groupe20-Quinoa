<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;

use App\Entity\Evenement;
use App\Repository\EvenementRepository;

class PagesController extends AbstractController
{

    /**
     * @Route("/home", name="home")
     */
    public function home(EvenementRepository $repo)
    {
        return $this->render('pages/home.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    /**
     * @Route("/inscription", name="inscription")
     */
    public function inscription()
    {
        return $this->render('pages/inscription.html.twig');
    }

    /**
     * @Route("/donnees", name="donnees")
     */
    public function donnees(Evenement $evenement, Request $request, ObjectManager $manager)
    {
        //$evenement = new Evenement();

        $form = $this->createFormBuilder($evenement)
                     ->add('Nom')
                     ->add('Periode')
                     ->add('Lieu')
                     ->add('Lutte')
                     ->add('Strategie')
                     ->add('Action')
                     ->add('Victoire')
                     ->add('Anecdote')
                     ->add('Citation')
                     ->getForm();

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $manager->persist($evenement);
            $manager->flush();
        }

        return $this->render('pages/donnees.html.twig', [
            'formDonnees' => $form->createView()
        ]);
    }
}