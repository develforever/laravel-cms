<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => [
                'id' => $this->id,
                'autor_user_id' => $this->autor_user_id,
                'title' => $this->title,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
            ],
            'links' => [
                'show' => route('page.show', ['page' => $this->id],false),
                'store' => route('page.store', ['page' => $this->id], false),
                'destroy' => route('page.destroy', ['page' => $this->id], false),
            ],
        ];
    }
}
