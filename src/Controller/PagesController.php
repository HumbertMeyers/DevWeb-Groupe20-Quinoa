<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Evenement;

class PagesController extends AbstractController
{

    /**
     * @Route("/home", name="home")
     */
    public function home()
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
    public function donnees()
    {
        $evenement = new Evenement();

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

        return $this->render('pages/donnees.html.twig', [
            'formDonnees' => $form->createView()
        ]);
    }
}