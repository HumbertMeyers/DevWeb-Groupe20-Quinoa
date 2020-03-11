<?php

namespace App\Entity;

class RemplissageDB
{
    protected $remplissage;
    protected $nom;
    protected $date;
    protected $lieu;
    protected $description;

    /**
     * @return mixed
     */
    public function getRemplissage()
    {
        return $this->remplissage;
    }

    /**
     * @param mixed $remplissage
     */
    public function setRemplissage($remplissage): void
    {
        $this->remplissage = $remplissage;
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
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param mixed $date
     */
    public function setDate($date): void
    {
        $this->date = $date;
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
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description): void
    {
        $this->description = $description;
    }


}
