<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

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
     * @Route("/inscriptions", name="inscriptions")
     */
    public function inscriptions()
    {
        return $this->render('pages/inscription.html.twig');
    }

    /**
     * @Route("/donnees", name="donnees")
     */
    public function donnees()
    {
        return $this->render('pages/donnees.html.twig');
    }
}