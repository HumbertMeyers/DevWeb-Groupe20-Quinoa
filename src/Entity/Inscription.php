<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\InscriptionRepository")
 */
class Inscription
{
    /**
     * @ORM\Column(type="string", length=25)
     */
    private $pseudo;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $mail;

    /**
     * @ORM\Column(type="integer")
     */
    private $age;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $desobeissant;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $commantaire;



     /**
     * @return mixed
     */
    public function getPseudo()
    {
        return $this->pseudo;
    }

    /**
     * @param mixed $pseudo
     */
    public function setPseudo($pseudo): void
    {
        $this->pseudo = $pseudo;
    }

    /**
     * @return mixed
     */
    public function getMail()
    {
        return $this->mail;
    }

    /**
     * @param mixed $mail
     */
    public function setMail($mail): void
    {
        $this->mail = $mail;
    }

    /**
     * @return mixed
     */
    public function getAge()
    {
        return $this->age;
    }

    /**
     * @param mixed $age
     */
    public function setAge($age): void
    {
        $this->age = $age;
    }

    /**
     * @return mixed
     */
    public function getDesobeissant()
    {
        return $this->desobeissant;
    }

    /**
     * @param mixed $desobeissant
     */
    public function setDesobeissant($desobeissant): void
    {
        $this->desobeissant = $desobeissant;
    }

    /**
     * @return mixed
     */
    public function getCommantaire()
    {
        return $this->commantaire;
    }

    /**
     * @param mixed $commantaire
     */
    public function setCommantaire($commantaire): void
    {
        $this->commantaire = $commantaire;
    }

}