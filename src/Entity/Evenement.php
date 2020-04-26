<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EvenementRepository")
 */
class Evenement
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom;

    /**
     * @ORM\Column(type="integer")
     */
    private $periode;

    /**
     * @ORM\Column(type="string", length=200)
     */
    private $lieu;

    /**
     * @ORM\Column(type="string", length=500)
     */
    private $lutte;

    /**
     * @ORM\Column(type="string", length=500)
     */
    private $strategie;

    /**
     * @ORM\Column(type="string", length=1000)
     */
    private $action;

    /**
     * @ORM\Column(type="string", length=1000)
     */
    private $victoire;

    /**
     * @ORM\Column(type="string", length=1000)
     */
    private $anecdote;

    /**
    * @ORM\Column(type="string", length=500)
    */
    private $citation;



    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * @param mixed $nom
     */
    public function setNom($nom): void
    {
        $this->nom = $nom;
    }

    /**
     * @return mixed
     */
    public function getPeriode()
    {
        return $this->periode;
    }

    /**
     * @param mixed $periode
     */
    public function setPeriode($periode): void
    {
        $this->periode = $periode;
    }

    /**
     * @return mixed
     */
    public function getLieu()
    {
        return $this->lieu;
    }

    /**
     * @param mixed $lieu
     */
    public function setLieu($lieu): void
    {
        $this->lieu = $lieu;
    }

    /**
     * @return mixed
     */
    public function getLutte()
    {
        return $this->lutte;
    }

    /**
     * @param mixed $lutte
     */
    public function setLutte($lutte): void
    {
        $this->lutte = $lutte;
    }

    /**
     * @return mixed
     */
    public function getStrategie()
    {
        return $this->strategie;
    }

    /**
     * @param mixed $strategie
     */
    public function setStrategie($strategie): void
    {
        $this->strategie = $strategie;
    }

    /**
     * @return mixed
     */
    public function getAction()
    {
        return $this->action;
    }

    /**
     * @param mixed $action
     */
    public function setAction($action): void
    {
        $this->action = $action;
    }

    /**
     * @return mixed
     */
    public function getVictoire()
    {
        return $this->victoire;
    }

    /**
     * @param mixed $victoire
     */
    public function setVictoire($victoire): void
    {
        $this->victoire = $victoire;
    }

    /**
     * @return mixed
     */
    public function getAnecdote()
    {
        return $this->anecdote;
    }

    /**
     * @param mixed $anecdote
     */
    public function setAnecdote($anecdote): void
    {
        $this->anecdote = $anecdote;
    }

    /**
     * @return mixed
     */
    public function getCitation()
    {
        return $this->citation;
    }

    /**
     * @param mixed $citation
     */
    public function setCitation($citation): void
    {
        $this->citation = $citation;
    }

    public function toArray()
    {
        return [
            'id' => $this->getId(),
            'nom' => $this->getNom(),
            'periode' => $this->getPeriode(),
            'lieu' => $this->getLieu(),
            'lutte' => $this->getLutte(),
            'strategie' => $this->getStrategie(),
            'action' => $this->getAction(),
            'victoire' => $this->getVictoire(),
            'anecdote' => $this->getAnecdote(),
            'citation' => $this->getCitation()
        ];
    }

}