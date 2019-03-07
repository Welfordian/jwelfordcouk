<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    protected $fillable = [
        'name', 'subject', 'email', 'message', 'enquiry_types'
    ];

    public function getEnquiryTypesAttribute($enquiry_types)
    {
      if (is_null($enquiry_types) || $enquiry_types === "null") {
        return collect([]);
      }

      try {
        $enquiry_types = collect(json_decode($enquiry_types));
      } catch (\Exception $e) {
        $enquiry_types = collect([]);
      }

      return $enquiry_types;
    }
}
